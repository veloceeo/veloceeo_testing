# Veleco Backend — API Documentation

This document consolidates all HTTP APIs in the repository, grouped by category. Each section lists the route prefix, endpoints (method + path), the handler file or function, required inputs, and a short description of behavior.

Notes:
- Base app mounts are shown in `index.ts` and `api/index.ts`.
- Many endpoints are protected by middleware (auth, admin/seller/user specific) — check `models/auth/middleware.ts` for middleware behavior.

---

## Table of contents

- [Entrypoints](#entrypoints)
- [Auth & Roles (user / admin / seller)](#auth--roles)
- [Store & Files](#store--files)
- [Products](#products)
- [Cart & Cart Items](#cart--cart-items)
- [Orders](#orders)
- [Payments & Settlements](#payments--settlements)
- [Notifications](#notifications)
- [Seller Dashboard & Analytics](#seller-dashboard--analytics)
- [Seller Caps & Models](#seller-caps--models)
- [Support Ticket System](#support-ticket-system)
- [Settings Management](#settings-management)
- [Utility Endpoints & Misc](#utility-endpoints--misc)
- [Workflow / request flow (end-to-end)](#workflow--request-flow)

---

## Entrypoints

- `index.ts` — primary Express app used for local development and exported for Vercel. Mounts routers:
  - `/api/user` -> `models/roles/user.ts`
  - `/api/admin` -> `models/roles/admin.ts`
  - `/api/store` -> `models/store.ts`
  - `/api/product` -> `models/products.ts`
  - `/api/cart` -> `models/cart.ts`
  - `/api/order` -> `models/orders.ts`
  - `/api/seller` -> `models/roles/seller` (CommonJS require used)
  - `/api/cart-items` -> `models/cart_items.ts`
  - `/api/dashboard` -> `models/seller_dashboard.ts`
  - `/api/data` -> `models/seller_dashboard_extended.ts`
  - `/api/payments` -> `models/payment_routes.ts`
  - `/api/notifications` -> `models/notification_routes.ts`
  - `/api/settings` -> `models/settings_management_routes.ts`
  - `/api/support` -> `support_ticket_routes.ts`
  - `/api/seller_cap` -> `models/seller_cap.ts`
  - `/api/percentage` -> `models/percentage.ts`

- `api/index.ts` — similar mounts for Vercel; root path `GET /` returns a simple health JSON.

---

## Auth & Roles

Files: `models/roles/user.ts`, `models/roles/admin.ts`, `models/auth/middleware.ts`

- User
  - POST /api/user/login — `models/roles/user.ts` (login flow; validates email/password; returns user and token)
  - POST /api/user/signup — `models/roles/user.ts` (create user; returns token and session)
  - GET /api/user/generate-otp — `models/roles/user.ts` (returns OTP for testing)
  - POST /api/user/logout — `models/roles/user.ts` (invalidates session logically)
  - PUT /api/user/forget — `models/roles/user.ts` (password reset)

- Admin
  - POST /api/admin/signup — `models/roles/admin.ts` (create admin; sends welcome email)
  - POST /api/admin/login — `models/roles/admin.ts` (password + optional OTP flow; returns JWT)
  - GET /api/admin/otp — `models/roles/admin.ts` (generate/send OTP)
  - PUT /api/admin/change-password — protected route in `admin.ts` (requires admin JWT)

- Middleware
  - `models/auth/middleware.ts` (exported helpers: `authMiddleware`, `authAdminMiddleware`, `authSellerMiddleware`, `authUserMiddleware`, used across routes)

---

## Store & Files

File: `models/store.ts`

Prefix: `/api/store`

Endpoints:
- POST /api/store/create — create a store (auth middleware). Accepts multipart file `file` and fields: name, address, phone, email, pan_number, adhar_number, gst_number, store_open, store_close, store_type. Stores a new store record and uploads files to Cloudinary.
- GET /api/store/ — get store details (admin auth)
- PUT /api/store/update — update store info (auth)
- DELETE /api/store/delete — delete the store (auth)
- POST /api/store/files — upload multiple files (auth)
- POST /api/store/file — upload single file (Aadhar) (auth)
- POST /api/store/pan — upload PAN file (auth)
- DELETE /api/store/file/:cloudinaryId — delete Cloudinary file (auth)
- GET /api/store/files — list uploaded files for store (auth)

Notes: Cloudinary credentials are configured in `store.ts` and some env vars are expected. File uploads use multer.

---

## Products

File: `models/products.ts`
Prefix: `/api/product`

- GET /api/product/ — list products (protected by authUserMiddleware in some routes)
- POST /api/product/add — add product (authUserMiddleware). Body: product_name, price, product_img, quantity, category, stock
- POST /api/product/quantity/:name — returns quantity and stock for a product by name
- GET /api/product/search/:name — search product by name
- DELETE /api/product/:name — delete product

---

## Cart & Cart Items

Files: `models/cart.ts`, `models/cart_items.ts`, `utils/cartUtils.ts`

Cart (prefix: `/api/cart`):
- POST /api/cart/add — add item to cart (authUserMiddleware). Body: productId, quantity, storeId
- GET /api/cart/carts — get all carts (authUserMiddleware)
- DELETE /api/cart/clear — clear active cart (authUserMiddleware)
- PUT /api/cart/update/:cartItemId — update cart item quantity
- DELETE /api/cart/remove/:cartItemId — remove item from cart

Cart items (prefix: `/api/cart-items`):
- GET /api/cart-items/ — fetch cart items for current user (authMiddleware)
- GET /api/cart-items/cart/:cartId — get cart items by cart ID (auth)
- GET /api/cart-items/:id — get single cart item (auth)
- POST /api/cart-items/add — add item (auth)
- PUT /api/cart-items/:id — update item (auth)
- DELETE /api/cart-items/:id — delete item (auth)
- DELETE /api/cart-items/clear/all — clear all cart items for user

Notes: `utils/cartUtils.ts` contains helpers: calculateCartTotal, updateCartTotal, validateProductStock, getOrCreateActiveCart, safeNumberConversion, validateRequiredFields — used by cart handlers to keep business logic separated.

---

## Orders

File: `models/orders.ts` (prefix `/api/order`)

- GET /api/order/ — list orders (authMiddleware)
- POST /api/order/order — create order (authMiddleware)
- GET /api/order/:id — get order by ID
- PUT /api/order/:id — update order
- DELETE /api/order/:id — delete order
- POST /api/order/admin — admin-only action (authAdminMiddleware) to list orders
- GET /api/order/admin — admin-only list
- POST /api/order/admin/order — admin create order

---

## Payments & Settlements

Files: `models/payment_api.ts` (exported functions) and `models/payment_routes.ts` (routes)

Routes (prefix: `/api/payments`):
- POST /api/payments/settlements — create settlement
- GET /api/payments/settlements — list settlements
- GET /api/payments/settlements/:id — get settlement by id
- PUT /api/payments/settlements/:id/status — update settlement status
- DELETE /api/payments/settlements/:id — delete settlement

- POST /api/payments/settlement-details — create settlement detail
- GET /api/payments/settlements/:settlementId/details — list details for a settlement
- PUT /api/payments/settlement-details/:id — update settlement detail

- POST /api/payments/payments — create payment
- GET /api/payments/payments — list payments
- GET /api/payments/payments/:id — get payment by id

Notes: The `payment_api.ts` file exports the handlers used by the router. The code interacts heavily with Prisma models: seller_settlement, settlement_detail, seller_payment and updates seller balances when settlements complete.

---

## Notifications

Files: `models/notification_api.ts`, `models/notification_routes.ts`
Prefix: `/api/notifications`

Core routes:
- POST /api/notifications — create notification
- GET /api/notifications — list notifications (filters: seller_id, store_id, category, status, priority, unread_only, start_date, end_date, page, limit)
- GET /api/notifications/:id — get by ID
- PUT /api/notifications/:id/read — mark as read
- PUT /api/notifications/bulk-read — mark multiple read
- PUT /api/notifications/:id/dismiss — dismiss notification
- PUT /api/notifications/:id/archive — archive
- DELETE /api/notifications/:id — delete

Seller-specific:
- GET /api/notifications/sellers/:sellerId/summary — seller summary
- PUT /api/notifications/sellers/:sellerId/mark-all-read — mark all read
- GET /api/notifications/sellers/:sellerId/preferences — get prefs
- PUT /api/notifications/sellers/:sellerId/preferences — update prefs

Triggers / helpers:
- POST /api/notifications/order, /inventory, /payment, /promotion — convenience endpoints to create specialized notifications
- POST /api/notifications/triggers/* — webhooks/triggers for new-order, low-stock, out-of-stock, payment-completed, payment-failed, offer-approval
- POST /api/notifications/cleanup — cleanup expired notifications
- GET /api/notifications/health — health check

---

## Seller Dashboard & Analytics

Files: `models/seller_dashboard.ts`, `models/seller_dashboard_extended.ts`
Prefix: `/api/dashboard` and `/api/data`

Key endpoints (examples):
- POST /api/dashboard/seller/create — create seller profile (authSellerMiddleware)
- GET /api/dashboard/seller/profile — get seller profile
- PUT /api/dashboard/seller/update — update seller profile
- GET /api/dashboard/analytics/dashboard — get single-day dashboard analytics
- GET /api/dashboard/analytics/range — analytics for a date range
- POST /api/dashboard/reports/generate — generate reports (daily/weekly/monthly/custom)

Extended (/api/data):
- GET /api/data/store-hours/:store_id — get store hours
- PUT /api/data/store-hours/:store_id — update hours
- GET /api/data/alerts/:store_id — get inventory alerts
- POST /api/data/alerts — create inventory alert
- PUT /api/data/alerts/:alert_id/resolve — resolve alert
- GET /api/data/reviews/:store_id — get store reviews

---

## Seller Caps & Models

Files: `models/seller_cap.ts`, `models/percentage.ts`

- GET /api/seller_cap/ — returns subscription models and caps
- GET /api/seller_cap/get-seller-cap — list seller caps
- POST /api/seller_cap/create-seller-cap — create cap (authSellerMiddleware)
- PUT /api/seller_cap/update-seller-cap/:id — update cap (authSellerMiddleware)
- DELETE /api/seller_cap/delete-seller-cap/:id — delete cap (authSellerMiddleware)

Percentage helper:
- POST /api/percentage/add — calculate add_on and percentage for given category and range
- GET /api/percentage/data — return config
- GET /api/percentage/calculate?category=&range= — calculate quick
- PUT /api/percentage/update — update the configuration (not fully implemented)

---

## Support Ticket System

Files: `support_ticket_api.ts`, `support_ticket_routes.ts`, `support_ticket_mail.ts`
Prefix: `/api/support`

Endpoints (from `support_ticket_routes.ts`):
- POST /api/support/tickets — create support ticket -> `createSupportTicket` in `support_ticket_api.ts`
  - Required body: subject, description, category, contact_email, contact_name, priority (optional)
  - Generates unique ticket_number and stores ticket in `support_ticket` table. Sends emails via `support_ticket_mail.ts`.
- GET /api/support/tickets — list tickets -> `getSupportTickets`
  - Query filters: page, limit, status, category, priority, user_id, seller_id, store_id, search
- GET /api/support/tickets/:id — get ticket by id or ticket number -> `getTicketById`
- POST /api/support/tickets/:ticketId/responses — add response -> `addTicketResponse`
- PATCH /api/support/tickets/:ticketId/status — update ticket status
- GET /api/support/tickets/:ticketId/email-logs — get email logs
- GET /api/support/stats — analytics
- GET /api/support/templates — list templates
- POST /api/support/templates — create template
- GET /api/support/health — health check
- GET /api/support/ — API info and list of endpoints

Handlers: see `support_ticket_api.ts` for implementations and validations. Uses Prisma model `support_ticket`, `ticket_response`, and `email_logs`. Email sending handled in `support_ticket_mail.ts`.

---

## Settings Management

Files: `models/settings_management_api.ts`, `models/settings_management_routes.ts`
Prefix: `/api/settings`

Functionality grouped in routes file — exported functions implemented in the API file: 

- Store status routes
  - PUT /api/settings/stores/:storeId/status — toggle store status (`toggleStoreStatus`)
  - GET /api/settings/stores/:storeId/status — get store status (`getStoreStatus`)

- Store hours
  - PUT /api/settings/stores/:storeId/hours — update hours (`updateStoreHours`)
  - GET /api/settings/stores/:storeId/hours — get hours (`getStoreHours`)

- Profile management
  - PUT /api/settings/sellers/:sellerId/profile — update profile (`updateSellerProfile`)
  - GET /api/settings/sellers/:sellerId/profile — get profile (`getSellerProfile`)

- Bank accounts
  - POST /api/settings/sellers/:sellerId/bank-accounts — add bank account
  - GET /api/settings/sellers/:sellerId/bank-accounts — get bank accounts
  - PUT /api/settings/sellers/:sellerId/bank-accounts/:accountId — update bank account
  - DELETE /api/settings/sellers/:sellerId/bank-accounts/:accountId — delete bank account

- Staff management
  - POST /api/settings/sellers/:sellerId/stores/:storeId/staff — add staff
  - GET /api/settings/sellers/:sellerId/stores/:storeId/staff — get staff
  - PUT /api/settings/sellers/:sellerId/stores/:storeId/staff/:staffId — update staff
  - DELETE /api/settings/sellers/:sellerId/stores/:storeId/staff/:staffId — remove staff

- Password & session management
  - PUT /api/settings/sellers/:sellerId/password — change password
  - POST /api/settings/sellers/:sellerId/sessions — create session
  - DELETE /api/settings/sellers/:sellerId/sessions — logout
  - GET /api/settings/sellers/:sellerId/sessions — get active sessions
  - DELETE /api/settings/sellers/:sellerId/sessions/all — logout all sessions

- GET /api/settings/sellers/:sellerId/overview — get settings overview

---

## Utility Endpoints & Misc

- Health checks: `/hello` in `index.ts`, `GET /` in `api/index.ts`, `GET /api/support/health`, `GET /api/notifications/health`.
- Mail: `mail.ts` and `support_ticket_mail.ts` contain email sending helpers used by support and admin modules.
- Prisma client is exposed in `lib/prisma.ts` and the generated client is under `db/generated/prisma` per project layout.

---

## Workflow — request flow (high level)

1. Client sends HTTP request to an endpoint mounted on Express (see `index.ts` or `api/index.ts`).
2. Request passes through global middleware (body parser, CORS) and route-level middleware (e.g., `authMiddleware`, `authAdminMiddleware`).
3. Route handlers either live inline in the route file (e.g., `models/store.ts`) or are imported from an `_api.ts` file (e.g., `settings_management_routes.ts` imports handlers from `models/settings_management_api.ts`).
4. Handlers validate input, perform business logic and database operations using Prisma (client imported from `db/generated/prisma` or `lib/prisma.ts`).
5. Handlers may call utilities (e.g., `utils/cartUtils.ts`) or external helpers (e.g., `support_ticket_mail.ts`, Cloudinary upload in `store.ts`).
6. For important state changes, handlers create notifications (`seller_notification` table) or send emails using mail helpers. Some handlers will update seller balances or settlement records.
7. Handlers return JSON responses with appropriate HTTP status codes. Errors are logged and transformed into 4xx/5xx responses. Routes often apply try/catch and a common `handleError` helper.

---

## Where to look for implementation details

- Database schema and migrations: `db/prisma/schema.prisma` and `db/prisma/migrations`.
- Prisma client usage: `db/generated/prisma` imports in many files.
- Auth middleware: `models/auth/middleware.ts`.
- Support mails: `support_ticket_mail.ts`.
- Payment and notification logic: `models/payment_api.ts`, `models/notification_api.ts`.

---

