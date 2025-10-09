import type { VercelResponse, VercelRequest } from '@vercel/node';
import express from 'express';
import user from '../models/roles/user.js';
import admin from '../models/roles/admin.js';
import seller from '../models/roles/seller.js';
import store from '../models/store.js';
import product from '../models/products.js';
import order from '../models/orders.js';
import cartItemsRouter from '../models/cart_items.js';
import sellerDashboard from '../models/seller_dashboard.js';
import sellerDashboardExtended from '../models/seller_dashboard_extended.js';
import paymentRoutes from '../models/payment_routes.js';
import notification from '../models/notification_routes.js';
import settingsManagementRoutes from '../models/settings_management_routes.js';
import cartRoutes from '../models/cart.js';
import supportRoutes from '../support_ticket_routes.js';
import sellerCap from '../models/seller_cap.js';
import percentageRouter from '../models/percentage.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", user);
app.use("/api/admin", admin);
app.use("/store", store);
app.use("/product", product);
app.use("/cart", cartRoutes);
app.use("/order", order);
app.use("/api/seller", seller);
app.use('/cart-items', cartItemsRouter);
app.use("/dashboard", sellerDashboard);
app.use("/data", sellerDashboardExtended);
app.use('/api/payments', paymentRoutes);
app.use("/api/notifications", notification);
app.use("/api/settings", settingsManagementRoutes);
app.use('/api/support', supportRoutes);
app.use("/seller/seller_cap", sellerCap);
app.use("/api/percentage", percentageRouter);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Veleco Backend API is running on Vercel!' });
});

// For local development
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');

  });
}

// Export for Vercel

export default app;
