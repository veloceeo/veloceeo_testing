import type { VercelResponse, VercelRequest } from '@vercel/node';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });
// Map alternates to DATABASE_URL
if (!process.env.DATABASE_URL && process.env.PRISMA_DATABASE_URL) {
  process.env.DATABASE_URL = process.env.PRISMA_DATABASE_URL;
}
if (!process.env.DATABASE_URL && process.env.POSTGRES_URL) {
  process.env.DATABASE_URL = process.env.POSTGRES_URL;
}
// Dev fallback for local docker compose
if (!process.env.DATABASE_URL && process.env.NODE_ENV !== 'production') {
  process.env.DATABASE_URL = 'postgresql://postgres:password@localhost:5432/ecommerce';
}

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
}));

// Routes (dynamically import after env is loaded)
// Using top-level await to ensure imports happen after dotenv config
const [
  { default: user },
  { default: admin },
  { default: seller },
  { default: store },
  { default: product },
  { default: order },
  { default: cartItemsRouter },
  { default: sellerDashboard },
  { default: sellerDashboardExtended },
  { default: paymentRoutes },
  { default: notification },
  { default: settingsManagementRoutes },
  { default: cartRoutes },
  { default: supportRoutes },
  { default: sellerCap },
  { default: percentageRouter }
] = await Promise.all([
  import('./models/roles/user.js'),
  import('./models/roles/admin.js'),
  import('./models/roles/seller.js'),
  import('./models/store.js'),
  import('./models/products.js'),
  import('./models/orders.js'),
  import('./models/cart_items.js'),
  import('./models/seller_dashboard.js'),
  import('./models/seller_dashboard_extended.js'),
  import('./models/payment_routes.js'),
  import('./models/notification_routes.js'),
  import('./models/settings_management_routes.js'),
  import('./models/cart.js'),
  import('./support_ticket_routes.js'),
  import('./models/seller_cap.js'),
  import('./models/percentage.js'),
]);

app.use('/api/user', user);
app.use('/api/admin', admin);
app.use('/api/store', store);
app.use('/api/product', product);
app.use('/api/cart', cartRoutes);
app.use('/api/order', order);
app.use('/api/seller', seller);
app.use('/api/cart-items', cartItemsRouter);
app.use('/api/dashboard', sellerDashboard);
app.use('/api/data', sellerDashboardExtended);
app.use('/api/payments', paymentRoutes);
app.use('/api/notifications', notification);
app.use('/api/settings', settingsManagementRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/seller_cap', sellerCap);
app.use('/api/percentage', percentageRouter);

// Health check endpoint
app.get('/hello', (req, res) => {
  res.json({ message: 'Veleco Backend API is running on Vercel!' });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');

  });
}

export default app;
