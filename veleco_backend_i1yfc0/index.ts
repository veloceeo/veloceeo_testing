import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// CommonJS automatically provides __dirname
// so no need for import.meta.url or fileURLToPath

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

// Import routes (CommonJS style)
const user = require('./models/roles/user');
const admin = require('./models/roles/admin');
const seller = require('./models/roles/seller');
const store = require('./models/store');
const product = require('./models/products');
const order = require('./models/orders');
const cartItemsRouter = require('./models/cart_items');
const sellerDashboard = require('./models/seller_dashboard');
const sellerDashboardExtended = require('./models/seller_dashboard_extended');
const paymentRoutes = require('./models/payment_routes');
const notification = require('./models/notification_routes');
const settingsManagementRoutes = require('./models/settings_management_routes');
const cartRoutes = require('./models/cart');
const supportRoutes = require('./support_ticket_routes');
const sellerCap = require('./models/seller_cap');
const percentageRouter = require('./models/percentage');

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
  })
);

// Routes
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

// Local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

// Export for Vercel serverless functions
export default app;
