# Changelog

## [0.10.0](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.9.1...shopping-app-backend-v0.10.0) (2023-10-26)


### Features

* **Auth-App:** Major refactor and cleanup of the auth app ([a8da8d0](https://github.com/Evanlab02/ShoppingListApp/commit/a8da8d094f6b71aab05102c69cad7d7219cc7d0c))
* **Detail-Pages:** Can now access store and item detail page ([b70500e](https://github.com/Evanlab02/ShoppingListApp/commit/b70500e8ae6551e158c23cf1a366b8bbce7188e3))
* **Environments:** Added further support for dev and prod environments ([acee799](https://github.com/Evanlab02/ShoppingListApp/commit/acee799375db18100d3f30215be07e753ee91a15))
* **Environments:** Cleanup ([87e5e2f](https://github.com/Evanlab02/ShoppingListApp/commit/87e5e2f26535671f0d0d3d999426e13cfb804f79))
* **Environments:** Implemented dev and prod environments ([5238539](https://github.com/Evanlab02/ShoppingListApp/commit/52385394df6053df8c937dc1303a6acd4a86c4eb))
* **Item-Store-App:** Major refactor and clean up of the app ([b43dcf2](https://github.com/Evanlab02/ShoppingListApp/commit/b43dcf2fca5ec2a7aa73e0821aa3aa1baf8d107a))
* **Items:** Added edit button to items list views ([b24e6ea](https://github.com/Evanlab02/ShoppingListApp/commit/b24e6eabbbac74bb3cb11c0024f97ee11a13031d))
* **Items:** Can now acccess item creation page ([587a944](https://github.com/Evanlab02/ShoppingListApp/commit/587a9449d120bd21984dba027f3f351eee465199))
* **Items:** Can now access page to view all items ([31178d4](https://github.com/Evanlab02/ShoppingListApp/commit/31178d44a5f9acfbefcd1cbe3bafd8038d9ea0b0))
* **Items:** Can now access user items page ([c47f62b](https://github.com/Evanlab02/ShoppingListApp/commit/c47f62bcf368a44ac05656dc6db96a9976428ea0))
* **List-App:** Major refactor and clean up of the app ([d4cb16e](https://github.com/Evanlab02/ShoppingListApp/commit/d4cb16e6e3bb19ed0b3b6d3a4e0ef97e91173b6f))
* **Store-Repo:** Can now create items ([87ea653](https://github.com/Evanlab02/ShoppingListApp/commit/87ea6532f4479dc4cab44bb9e6b6eb4c9bee7309))
* **Stores:** Can now access a store creation view ([4a1a21f](https://github.com/Evanlab02/ShoppingListApp/commit/4a1a21fa1b5ae71e939ede68e0421eefa5032aec))
* **Stores:** Can now access store overview pages ([647a94b](https://github.com/Evanlab02/ShoppingListApp/commit/647a94b1656494e1d93de77fdb36eb21817e704c))
* **Stores:** Store creation post endpoint ([b15745c](https://github.com/Evanlab02/ShoppingListApp/commit/b15745c90ba10293f21bb0f40ca69ccd2cd96562))


### Bug Fixes

* **Api-Key:** Api key header is now based off the value in application.properties file ([44b6a34](https://github.com/Evanlab02/ShoppingListApp/commit/44b6a344f8b4f7c0a16f9e00a272cc5ff2567cf7))
* **Auth:** Fixed issue where users could access pages that they require to be logged in for ([3640385](https://github.com/Evanlab02/ShoppingListApp/commit/3640385bf087698dda39b30465ff1b916ddd82c3))
* **Settings:** Test and local settings now use correct django-key ([3323ae5](https://github.com/Evanlab02/ShoppingListApp/commit/3323ae5ea08a1e196b34622e2acee5543936417e))
* **ShoppingLists:** Shopping lists can now contain multiples of the same item ([4fb6fcf](https://github.com/Evanlab02/ShoppingListApp/commit/4fb6fcf0c9100cd6f76033e4c1f5d65945e5c541))

## [0.9.1](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.9.0...shopping-app-backend-v0.9.1) (2023-10-03)


### Bug Fixes

* **Dashboard-Current:** Fixed rounding issue with the average price return value ([6d187d8](https://github.com/Evanlab02/ShoppingListApp/commit/6d187d8b9b1a18839faabe658c7c420860ed68f3))

## [0.9.0](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.8.0...shopping-app-backend-v0.9.0) (2023-10-03)


### Features

* **Login:** Added register button on login page, button routes to register page ([a9c5f10](https://github.com/Evanlab02/ShoppingListApp/commit/a9c5f107b1ef8061e5bbdaf17854de194e23bdc3))
* **Login:** Users can now access a login page ([e690ef1](https://github.com/Evanlab02/ShoppingListApp/commit/e690ef1e2cfc46b842a3e7e197d0d0e454d64748))
* **Logout:** Users can now access a logout page ([b779600](https://github.com/Evanlab02/ShoppingListApp/commit/b7796003d5c93408d6287fa54cd5f67ed35e6777))
* **Register:** Users can now access a register/account creation page ([2e40530](https://github.com/Evanlab02/ShoppingListApp/commit/2e40530b4340285617de55c07c60a39e5154e656))

## [0.8.0](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.7.0...shopping-app-backend-v0.8.0) (2023-10-02)


### Features

* **Budgets:** Can now link budgets to shopping lists ([ed112bc](https://github.com/Evanlab02/ShoppingListApp/commit/ed112bcf75666fcf6b877bc1c9720f012619a637))
* **Dashboard:** Created dashboard endpoints ([49f561d](https://github.com/Evanlab02/ShoppingListApp/commit/49f561d913971e4d6626f4aa382bef3a404e1dd4))
* **Refactor:** Project reset ([dd15017](https://github.com/Evanlab02/ShoppingListApp/commit/dd1501723b48d6216a5aeb1be34abca45f467020))

## [0.7.0](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.6.0...shopping-app-backend-v0.7.0) (2023-09-29)


### Features

* **Lists:** Can now delete lists through the API ([0db9bdb](https://github.com/Evanlab02/ShoppingListApp/commit/0db9bdb868476a0484cde70f49611021f1a72dc2))
* **Lists:** Can now edit lists through the API ([6f8dac1](https://github.com/Evanlab02/ShoppingListApp/commit/6f8dac18a26f8e8ef468616061da4cd705289d2f))
* **Lists:** Can now get current shopping list through the API ([e976958](https://github.com/Evanlab02/ShoppingListApp/commit/e9769583c3d3ef93124e043806d8b6fc6413a84b))
* **Lists:** Can now get details of a shopping list ([22457b6](https://github.com/Evanlab02/ShoppingListApp/commit/22457b67b1c441d2083dc018b7644015129dabf8))
* **Testing:** Added testing for edit endpoint ([aab4123](https://github.com/Evanlab02/ShoppingListApp/commit/aab412356269d52b3496929c9c25bf8b910d5560))
* **Testing:** Added tests for list detail endpoint ([3b1c8f3](https://github.com/Evanlab02/ShoppingListApp/commit/3b1c8f3154954fa1223b78ff471a382be86a1708))

## [0.6.0](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.5.0...shopping-app-backend-v0.6.0) (2023-09-21)


### Features

* **Docs:** Added documentation for Server ([01450f0](https://github.com/Evanlab02/ShoppingListApp/commit/01450f0d81543ada3002d321676a733ee4dfb7a9))
* **docs:** Project Wide Documentation ([7d005d1](https://github.com/Evanlab02/ShoppingListApp/commit/7d005d19041764e682d80a375177a027820872a8))
* **Items:** Can now delete items through the API ([b3266d8](https://github.com/Evanlab02/ShoppingListApp/commit/b3266d884a2165f1b3085ce86469b6bf357b3562))
* **Items:** Can now get all items through the API ([6480409](https://github.com/Evanlab02/ShoppingListApp/commit/6480409e31b9baca7857a712c1aaabc31657da56))
* **Items:** Get details of a single item ([9d5a14c](https://github.com/Evanlab02/ShoppingListApp/commit/9d5a14cb20a138bac933af7f11b656d07764d090))
* **Items:** Get your created items through the API ([ee7746d](https://github.com/Evanlab02/ShoppingListApp/commit/ee7746d1100acf34014fc0676c18b0525f3ea2f1))
* **Items:** Update items through the API ([d29b867](https://github.com/Evanlab02/ShoppingListApp/commit/d29b86791424fe5d0f490e7252eaec7d3a2c3581))


### Bug Fixes

* **Clean-Up:** Cleaned up some files ([d025384](https://github.com/Evanlab02/ShoppingListApp/commit/d02538425397ddfefead47267f4fed4561248b0d))
* **Docker:** Docker improvements ([2acb6b1](https://github.com/Evanlab02/ShoppingListApp/commit/2acb6b18ec82ccace2e726f17463c0b9123c8bc7))

## [0.5.0](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.4.3...shopping-app-backend-v0.5.0) (2023-09-13)


### Features

* **Items:** Added items to admin page ([85125ec](https://github.com/Evanlab02/ShoppingListApp/commit/85125ec61347a0f605e982abb49f28144773a0f4))
* **Items:** Created items app ([66c63ba](https://github.com/Evanlab02/ShoppingListApp/commit/66c63baa257cf1558c0366dee0fd6bcb6421085a))
* **Lists:** Can now retrieve all lists through the API ([8a26df8](https://github.com/Evanlab02/ShoppingListApp/commit/8a26df892c1a0730594b2474e45fa32429b50580))
* **Stores:** Can now delete stores through the API. ([68d87a8](https://github.com/Evanlab02/ShoppingListApp/commit/68d87a8af4eedf2648cbf6e371b4c2701d1e9fe3))
* **Stores:** Can now get all of the users created stores. ([40e1a11](https://github.com/Evanlab02/ShoppingListApp/commit/40e1a11d78088c95adc7bf2c196465da04b9ab83))
* **Stores:** Can now get all stores ([31046cc](https://github.com/Evanlab02/ShoppingListApp/commit/31046cc9d350c89fc871202ec01356dabc053a9a))
* **Stores:** Can now get details of a single store. ([d27f815](https://github.com/Evanlab02/ShoppingListApp/commit/d27f81553ed3e0d2768ba35294a1471bbf1831aa))
* **Stores:** Can now update stores through the API ([0047b93](https://github.com/Evanlab02/ShoppingListApp/commit/0047b93c7060549373ba24604fa58b3c99acc95c))
* **Stores:** Created store model and added it to admin page ([520174c](https://github.com/Evanlab02/ShoppingListApp/commit/520174c1f7c73f73114f22dbdca53de265c4a755))
* **Stores:** Stores and their items can now be created ([02174fa](https://github.com/Evanlab02/ShoppingListApp/commit/02174fac884e54ded495a6431439b8a661962bd7))
* **Testing:** Testing for create store and item route ([318426a](https://github.com/Evanlab02/ShoppingListApp/commit/318426a7c2f39582c67fdbd5a26675ada61a6d84))

## [0.4.3](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.4.2...shopping-app-backend-v0.4.3) (2023-09-09)


### Bug Fixes

* **Sonar:** Dealt with all code smells ([a361dfc](https://github.com/Evanlab02/ShoppingListApp/commit/a361dfcb1e4d0571b5568f1ef1f73753a80ae372))

## [0.4.2](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.4.1...shopping-app-backend-v0.4.2) (2023-09-09)


### Bug Fixes

* **Docker:** Adjusted docker ignore to exlude non-prod files ([f711031](https://github.com/Evanlab02/ShoppingListApp/commit/f711031823372ecd91d79c9024c504eec3d062b0))
* **ShoppingLists:** Different users date ranges will not clash with each other anymore ([ebdfd85](https://github.com/Evanlab02/ShoppingListApp/commit/ebdfd85e5e05cabce65c61d75baa56710658e26c))

## [0.4.1](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.4.0...shopping-app-backend-v0.4.1) (2023-09-09)


### Bug Fixes

* **Authentication:** Switched to token based authentication to solve CSRF errors. ([d303942](https://github.com/Evanlab02/ShoppingListApp/commit/d303942a1f2024e52194adb4761ad09d82064d41))

## [0.4.0](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.3.0...shopping-app-backend-v0.4.0) (2023-09-08)


### Features

* **Authentication:** Added authentication to create shopping list endpoint ([bf748de](https://github.com/Evanlab02/ShoppingListApp/commit/bf748de26759af3ba436d3ddaa48c83b1ee47d78))
* **Authentication:** Users can now login via the API ([1495d7c](https://github.com/Evanlab02/ShoppingListApp/commit/1495d7cd0f6b421c252450362544055329f59961))
* **Authentication:** Users can now logout through the API ([23334de](https://github.com/Evanlab02/ShoppingListApp/commit/23334de5931394d8bf6004a82d6a3ac2db77b88a))
* **Authentication:** You can now register new users using the API ([f434053](https://github.com/Evanlab02/ShoppingListApp/commit/f43405316ff3050f1f415369fec9c53c6b29f8a5))
* **Coverage:** Added coverage to testing, project and pipelines ([5d0d0aa](https://github.com/Evanlab02/ShoppingListApp/commit/5d0d0aa3c705348c597d9a91e6b1533eefca2518))
* **ShoppingList:** Can now create a shopping list through the API ([96b76a9](https://github.com/Evanlab02/ShoppingListApp/commit/96b76a904f39e2f4c63def8a497108cbde325146))
* **Testing:** Added authentication app django tests ([94a40e9](https://github.com/Evanlab02/ShoppingListApp/commit/94a40e9139ddbd195074f18e4611cd4c44b4eb66))


### Bug Fixes

* **Testing:** Added testing settings ([9c1c4ae](https://github.com/Evanlab02/ShoppingListApp/commit/9c1c4aea1b2ffe9c72eb49c606ce960314ed13ba))

## [0.3.0](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.2.0...shopping-app-backend-v0.3.0) (2023-09-05)


### Features

* **Admin:** Added shopping lists to admin page ([5c6a49d](https://github.com/Evanlab02/ShoppingListApp/commit/5c6a49d5c00a8497d3a13861c1f7ea7a251670cc))
* **Deps:** Updated dependencies ([956028b](https://github.com/Evanlab02/ShoppingListApp/commit/956028b48db962be6d701a2b3d29db409691a3d9))

## [0.2.0](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.1.0...shopping-app-backend-v0.2.0) (2023-09-04)


### Features

* **Settings:** Allow backend to run on network host ([c486b14](https://github.com/Evanlab02/ShoppingListApp/commit/c486b14e8b52323ec4190ebdd563537ad32a46ee))

## [0.1.0](https://github.com/Evanlab02/ShoppingListApp/compare/shopping-app-backend-v0.1.0...shopping-app-backend-v0.1.0) (2023-08-31)


### Features

* **Backend:** Setup backend project ([31062a1](https://github.com/Evanlab02/ShoppingListApp/commit/31062a197d7370e57b50fa6355ca24a7f6dc118e))
* **Backend:** Setup basic backend app ([b0aa0e8](https://github.com/Evanlab02/ShoppingListApp/commit/b0aa0e80d5a907cdfcfa16d1a26c60d02c414512))
* **Configs:** Moved asgi and wsgi configs to config directory ([60d9bb8](https://github.com/Evanlab02/ShoppingListApp/commit/60d9bb8f219b1ea22731a62e6eb8e5a691f72c7d))
* **Django:** Development backend created ([93d36bf](https://github.com/Evanlab02/ShoppingListApp/commit/93d36bf46e18156b2c24dff79168cef80d2e3ac1))
* **Docker:** Added docker compose file ([20bd3d1](https://github.com/Evanlab02/ShoppingListApp/commit/20bd3d1a4c4fce7774aa04f1c833a6f6a07bf3fe))
* **Docker:** Added dockerfile ([2d7ca47](https://github.com/Evanlab02/ShoppingListApp/commit/2d7ca47fecce4eda015e40c8fb550a8d497e5b60))
* **Linting:** Added linting and linting pipelines ([f4f5776](https://github.com/Evanlab02/ShoppingListApp/commit/f4f57767f04e6afa1ec1b118c893bf174259e863))
* **Makefile:** Added rule to generate static files for django ([42ee0f7](https://github.com/Evanlab02/ShoppingListApp/commit/42ee0f7e9ddb33bfe2cf019ff729860b9c0839e0))
* **Production:** Setup all apps in production fashion ([ab1ef61](https://github.com/Evanlab02/ShoppingListApp/commit/ab1ef61f1fc5fdda69a09ae52b83b4625b23cacf))
* **Settings:** Made django settings safer ([3699689](https://github.com/Evanlab02/ShoppingListApp/commit/36996892589c0eb9fe4d580d85e18fc907dec63a))


### Miscellaneous Chores

* release 0.1.0 ([86e0c8a](https://github.com/Evanlab02/ShoppingListApp/commit/86e0c8af757fbdd691f1742edd3e7670c6f87d31))

## [0.1.0](https://github.com/Evanlab02/ShoppingListApp/compare/v0.2.0...v0.1.0) (2023-08-31)


### Features

* **Backend:** Setup basic backend app ([b0aa0e8](https://github.com/Evanlab02/ShoppingListApp/commit/b0aa0e80d5a907cdfcfa16d1a26c60d02c414512))


### Miscellaneous Chores

* release 0.1.0 ([86e0c8a](https://github.com/Evanlab02/ShoppingListApp/commit/86e0c8af757fbdd691f1742edd3e7670c6f87d31))

## [0.2.0](https://github.com/Evanlab02/ShoppingListApp/compare/v0.1.0...v0.2.0) (2023-08-31)


### Features

* **Backend:** Setup backend project ([31062a1](https://github.com/Evanlab02/ShoppingListApp/commit/31062a197d7370e57b50fa6355ca24a7f6dc118e))
