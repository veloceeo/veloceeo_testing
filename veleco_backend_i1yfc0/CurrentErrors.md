# Error Category
- TS2834 / TS2835 Errors (Import Path Issues)
- TS7006 Errors (Implicit Any Types)
------------------------------------
## BUILD LOG SOURCE:
# Vercel Build Error Summary

## Build Info
- Location: Washington, D.C., USA (East) – iad1
- Build machine: 2 cores, 8 GB
- Repository: `github.com/veloceeo/veloceeo_testing` (Branch: main, Commit: 51d7fa0)
- Vercel CLI: 48.2.9
- Bun version: 1.2.23

---

## Dependency Installation
- 424 packages installed, 13 removed
- Installed packages included: `prisma@6.17.0`, `@prisma/client@6.17.0`, `typescript@5.9.2`, `express@5.1.0`, `bcrypt@5.1.1`, `bcryptjs@2.4.3`, `zod@3.25.76`, etc.

---

## Prisma Generation
- Prisma schema loaded from `db/prisma/schema.prisma`
- Prisma Client generated successfully: `./db/generated/prisma`

---

## TypeScript Compilation Errors

### 1. Module Not Found / Import Errors
- `Cannot find module '../generated/prisma.js'`  
  -- Files affected: `db/seed/seed_notification_data.ts`, `db/seed/seed_seller_dashboard.ts`, `db/seed/seed_settings_data.ts`, `db/seed/seed_support_ticket_data.ts`, `models/seller_dashboard.ts`, `models/seller_dashboard_extended.ts`
  -- Fixed :
  - [x] db/seed/seed_notification_data.ts
  - [x] db/seed/seed_seller_dashboard.ts
  - [x] db/seed/seed_settings_data.ts
  - [x] db/seed/seed_support_ticket_data.ts
  - [x] models/seller_dashboard.ts
  - [x] models/seller_dashboard_extended.ts

- `Relative import paths need explicit file extensions`  
  Affected files: `db/seed/seed_support_tickets.ts`, `lib/prisma.ts`, `models/cart.ts`, `models/cart_items.ts`, `models/notification_api.ts`, `models/notification_routes.ts`, `models/orders.ts`, `models/payment_api.ts`, `models/payment_routes.ts`, `models/products.ts`, `models/roles/admin.ts`, `models/roles/seller.ts`, `models/roles/user.ts`, `models/seller_cap.ts`, `models/settings_management_api.ts`, `models/settings_management_routes.ts`

- `Could not find a declaration file for module 'bcrypt'`  
  File: `models/settings_management_api.ts`

---

### 2. Implicit `any` Type Errors (TS7006)
- Seed files: `db/seed/seed_settings_data.ts`, `db/seed/seed_support_ticket_data.ts`
- Model files: `models/cart.ts`, `models/cart_items.ts`, `models/notification_api.ts`, `models/payment_routes.ts`, `models/seller_dashboard.ts`, `models/seller_dashboard_extended.ts`, `models/settings_management_api.ts`

---

### 3. Express / Multer Type Incompatibility (TS2769 / TS2769)
- Files: `models/store.ts`
- Errors related to `RequestHandler`, `AuthRequest`, `files` property, and parameter type incompatibilities.

---

### 4. Miscellaneous Errors
- Type overload mismatches: `models/store.ts`  
- Other TypeScript errors related to function parameters, request handlers, and module resolutions.


