# Error Category
- TS2834 / TS2835 Errors (Import Path Issues)
- TS7006 Errors (Implicit Any Types)
------------------------------------
## BUILD LOG SOURCE:
20:52:09.437 api/index.ts(3,18): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/roles/user.js'?
20:52:09.439 api/index.ts(4,19): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/roles/admin.js'?
20:52:09.440 api/index.ts(5,20): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/roles/seller.js'?
20:52:09.441 api/index.ts(6,19): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/store.js'?
20:52:09.441 api/index.ts(7,21): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/products.js'?
20:52:09.441 api/index.ts(8,19): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/orders.js'?
20:52:09.442 api/index.ts(9,29): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/cart_items.js'?
20:52:09.442 api/index.ts(10,29): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/seller_dashboard.js'?
20:52:09.443 api/index.ts(11,37): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/seller_dashboard_extended.js'?
20:52:09.444 api/index.ts(12,27): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/payment_routes.js'?
20:52:09.445 api/index.ts(13,26): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/notification_routes.js'?
20:52:09.446 api/index.ts(14,38): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/settings_management_routes.js'?
20:52:09.446 api/index.ts(15,24): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/cart.js'?
20:52:09.446 api/index.ts(16,27): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../support_ticket_routes.js'?
20:52:09.447 api/index.ts(17,23): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/seller_cap.js'?
20:52:09.447 api/index.ts(18,30): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../models/percentage.js'?
20:52:09.450 db/seed/seed_notification_data.ts(1,94): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.453 db/seed/seed_seller_dashboard.ts(1,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.455 db/seed/seed_settings_data.ts(1,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.458 db/seed/seed_settings_data.ts(263,64): error TS7006: Parameter 'acc' implicitly has an 'any' type.
20:52:09.460 db/seed/seed_settings_data.ts(263,69): error TS7006: Parameter 's' implicitly has an 'any' type.
20:52:09.460 db/seed/seed_support_ticket_data.ts(1,76): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.460 db/seed/seed_support_ticket_data.ts(206,40): error TS7006: Parameter 'u' implicitly has an 'any' type.
20:52:09.461 db/seed/seed_support_ticket_data.ts(275,33): error TS7006: Parameter 'u' implicitly has an 'any' type.
20:52:09.461 db/seed/seed_support_ticket_data.ts(294,33): error TS7006: Parameter 'u' implicitly has an 'any' type.
20:52:09.461 db/seed/seed_support_ticket_data.ts(315,33): error TS7006: Parameter 'u' implicitly has an 'any' type.
20:52:09.461 db/seed/seed_support_ticket_data.ts(418,35): error TS7006: Parameter 'u' implicitly has an 'any' type.
20:52:09.462 db/seed/seed_support_ticket_data.ts(448,35): error TS7006: Parameter 'u' implicitly has an 'any' type.
20:52:09.462 db/seed/seed_support_tickets.ts(17,65): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './seed_support_ticket_data.js'?
20:52:09.462 lib/prisma.ts(1,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.462 models/cart.ts(2,31): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.463 models/cart.ts(3,36): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './auth/middleware.js'?
20:52:09.463 models/cart.ts(11,8): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../utils/cartUtils.js'?
20:52:09.463 models/cart.ts(190,30): error TS7006: Parameter 'cart' implicitly has an 'any' type.
20:52:09.463 models/cart_items.ts(2,32): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './auth/middleware.js'?
20:52:09.463 models/cart_items.ts(4,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.464 models/cart_items.ts(49,44): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.464 models/cart_items.ts(49,49): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.464 models/cart_items.ts(221,47): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.464 models/cart_items.ts(221,52): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.465 models/cart_items.ts(300,47): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.465 models/cart_items.ts(300,52): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.465 models/cart_items.ts(358,52): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.465 models/cart_items.ts(358,57): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.465 models/cart_items.ts(541,53): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.466 models/cart_items.ts(541,58): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.466 models/notification_api.ts(1,94): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.466 models/notification_api.ts(468,49): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.466 models/notification_routes.ts(26,8): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './notification_api.js'?
20:52:09.466 models/orders.ts(2,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.467 models/orders.ts(3,53): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './auth/middleware.js'?
20:52:09.467 models/payment_api.ts(1,78): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.467 models/payment_routes.ts(3,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.467 models/payment_routes.ts(530,42): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.467 models/payment_routes.ts(530,47): error TS7006: Parameter 'payment' implicitly has an 'any' type.
20:52:09.467 models/payment_routes.ts(531,43): error TS7006: Parameter 'acc' implicitly has an 'any' type.
20:52:09.468 models/payment_routes.ts(531,48): error TS7006: Parameter 'payment' implicitly has an 'any' type.
20:52:09.468 models/payment_routes.ts(674,42): error TS7006: Parameter 'payment' implicitly has an 'any' type.
20:52:09.468 models/payment_routes.ts(689,17): error TS7006: Parameter 'payment' implicitly has an 'any' type.
20:52:09.468 models/payment_routes.ts(690,14): error TS7006: Parameter 'payment' implicitly has an 'any' type.
20:52:09.468 models/payment_routes.ts(731,43): error TS7006: Parameter 'acc' implicitly has an 'any' type.
20:52:09.468 models/payment_routes.ts(731,48): error TS7006: Parameter 'balance' implicitly has an 'any' type.
20:52:09.469 models/payment_routes.ts(964,43): error TS7006: Parameter 'p' implicitly has an 'any' type.
20:52:09.469 models/payment_routes.ts(965,41): error TS7006: Parameter 'p' implicitly has an 'any' type.
20:52:09.469 models/payment_routes.ts(966,40): error TS7006: Parameter 'p' implicitly has an 'any' type.
20:52:09.469 models/payment_routes.ts(967,38): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.469 models/payment_routes.ts(967,43): error TS7006: Parameter 'p' implicitly has an 'any' type.
20:52:09.470 models/payment_routes.ts(968,70): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.470 models/payment_routes.ts(968,75): error TS7006: Parameter 'p' implicitly has an 'any' type.
20:52:09.470 models/payment_routes.ts(973,49): error TS7006: Parameter 's' implicitly has an 'any' type.
20:52:09.470 models/payment_routes.ts(974,47): error TS7006: Parameter 's' implicitly has an 'any' type.
20:52:09.470 models/payment_routes.ts(975,47): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.470 models/payment_routes.ts(975,52): error TS7006: Parameter 's' implicitly has an 'any' type.
20:52:09.470 models/payment_routes.ts(976,45): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.471 models/payment_routes.ts(976,50): error TS7006: Parameter 's' implicitly has an 'any' type.
20:52:09.471 models/payment_routes.ts(977,38): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.471 models/payment_routes.ts(977,43): error TS7006: Parameter 's' implicitly has an 'any' type.
20:52:09.471 models/payment_routes.ts(978,50): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.471 models/payment_routes.ts(978,55): error TS7006: Parameter 's' implicitly has an 'any' type.
20:52:09.472 models/products.ts(3,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.472 models/products.ts(4,36): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './auth/middleware.js'?
20:52:09.472 models/roles/admin.ts(2,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.472 models/roles/seller.ts(2,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.473 models/roles/seller.ts(5,27): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './user.js'?
20:52:09.473 models/roles/seller.ts(7,38): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../auth/middleware.js'?
20:52:09.473 models/roles/user.ts(2,31): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.473 models/seller_cap.ts(2,36): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './auth/middleware.js'?
20:52:09.473 models/seller_cap.ts(3,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.473 models/seller_dashboard.ts(2,38): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './auth/middleware.js'?
20:52:09.473 models/seller_dashboard.ts(3,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.474 models/seller_dashboard.ts(183,59): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.474 models/seller_dashboard.ts(183,64): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.474 models/seller_dashboard.ts(185,60): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.474 models/seller_dashboard.ts(185,65): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.474 models/seller_dashboard.ts(186,49): error TS7006: Parameter 'itemSum' implicitly has an 'any' type.
20:52:09.474 models/seller_dashboard.ts(186,58): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.475 models/seller_dashboard.ts(187,62): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.475 models/seller_dashboard.ts(267,42): error TS7006: Parameter 'acc' implicitly has an 'any' type.
20:52:09.475 models/seller_dashboard.ts(267,47): error TS7006: Parameter 'curr' implicitly has an 'any' type.
20:52:09.475 models/seller_dashboard.ts(385,49): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.475 models/seller_dashboard.ts(385,54): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.475 models/seller_dashboard.ts(387,50): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.476 models/seller_dashboard.ts(387,55): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.487 models/seller_dashboard.ts(388,45): error TS7006: Parameter 'itemSum' implicitly has an 'any' type.
20:52:09.487 models/seller_dashboard.ts(388,54): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.488 models/seller_dashboard.ts(389,51): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.488 models/seller_dashboard.ts(393,24): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.488 models/seller_dashboard.ts(394,39): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.488 models/seller_dashboard.ts(413,24): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.488 models/seller_dashboard.ts(570,55): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.488 models/seller_dashboard.ts(570,60): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.489 models/seller_dashboard.ts(572,55): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.489 models/seller_dashboard.ts(574,35): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.489 models/seller_dashboard.ts(574,40): error TS7006: Parameter 'review' implicitly has an 'any' type.
20:52:09.489 models/seller_dashboard.ts(577,32): error TS7006: Parameter 'a' implicitly has an 'any' type.
20:52:09.489 models/seller_dashboard.ts(577,35): error TS7006: Parameter 'b' implicitly has an 'any' type.
20:52:09.490 models/seller_dashboard.ts(740,46): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.490 models/seller_dashboard.ts(740,51): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.490 models/seller_dashboard.ts(741,47): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.490 models/seller_dashboard.ts(742,47): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.490 models/seller_dashboard.ts(743,46): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.496 models/seller_dashboard.ts(745,59): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.497 models/seller_dashboard.ts(745,64): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.497 models/seller_dashboard.ts(746,57): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.497 models/seller_dashboard.ts(746,62): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.497 models/seller_dashboard.ts(747,55): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.497 models/seller_dashboard.ts(747,60): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.497 models/seller_dashboard.ts(750,24): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.498 models/seller_dashboard.ts(769,24): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.498 models/seller_dashboard.ts(770,39): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.498 models/seller_dashboard.ts(808,32): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.498 models/seller_dashboard.ts(891,46): error TS7006: Parameter 'acc' implicitly has an 'any' type.
20:52:09.498 models/seller_dashboard.ts(891,51): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.498 models/seller_dashboard.ts(1035,28): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.499 models/seller_dashboard.ts(1047,28): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.499 models/seller_dashboard.ts(1049,47): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.499 models/seller_dashboard.ts(1071,28): error TS7006: Parameter 'order' implicitly has an 'any' type.
20:52:09.499 models/seller_dashboard.ts(1073,53): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.499 models/seller_dashboard_extended.ts(2,38): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './auth/middleware.js'?
20:52:09.499 models/seller_dashboard_extended.ts(3,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.500 models/seller_dashboard_extended.ts(196,43): error TS7006: Parameter 'a' implicitly has an 'any' type.
20:52:09.500 models/seller_dashboard_extended.ts(197,41): error TS7006: Parameter 'a' implicitly has an 'any' type.
20:52:09.500 models/seller_dashboard_extended.ts(198,37): error TS7006: Parameter 'a' implicitly has an 'any' type.
20:52:09.500 models/seller_dashboard_extended.ts(408,51): error TS7006: Parameter 'stat' implicitly has an 'any' type.
20:52:09.500 models/settings_management_api.ts(2,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.500 models/settings_management_api.ts(3,20): error TS2307: Cannot find module 'bcrypt' or its corresponding type declarations.
20:52:09.501 models/settings_management_api.ts(288,53): error TS7006: Parameter 'tx' implicitly has an 'any' type.
20:52:09.501 models/settings_management_routes.ts(38,8): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './settings_management_api.js'?
20:52:09.501 models/store.ts(5,20): error TS2307: Cannot find module 'multer' or its corresponding type declarations.
20:52:09.501 models/store.ts(13,20): error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
20:52:09.502 models/store.ts(14,21): error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
20:52:09.502 models/store.ts(47,18): error TS7006: Parameter 'req' implicitly has an 'any' type.
20:52:09.502 models/store.ts(47,23): error TS7006: Parameter 'file' implicitly has an 'any' type.
20:52:09.502 models/store.ts(47,29): error TS7006: Parameter 'cb' implicitly has an 'any' type.
20:52:09.502 models/store.ts(190,54): error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
20:52:09.503 models/store.ts(190,94): error TS2694: Namespace 'global.Express' has no exported member 'Multer'.
20:52:09.503 support_ticket_routes.ts(12,8): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './support_ticket_api.js'?
20:52:09.503 support_ticket_routes.ts(13,37): error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './models/auth/middleware.js'?
20:52:09.503 utils/cartUtils.ts(1,30): error TS2834: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.
20:52:09.503 utils/cartUtils.ts(17,41): error TS7006: Parameter 'sum' implicitly has an 'any' type.
20:52:09.504 utils/cartUtils.ts(17,46): error TS7006: Parameter 'item' implicitly has an 'any' type.
20:52:09.507 Error: Command "bun run vercel-build" exited with 2


