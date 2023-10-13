# Roadmap

Find below the roadmap for the project. It is subject to change.

## Backend - V0.8.0

- [x] Add budget functionality to shopping lists
- [x] Create a new endpoint to get the dashboard data

## Frontend - V0.6.0

- [x] Connect the dashboard page to the backend

## Backend - V0.9.0

### Add login template page
- [x] User can login with email and password
- [x] User gets error message if login fails
- [x] User gets redirected to dashboard page if login succeeds
- [x] User gets redirected to dashboard page if already logged in
- [x] Tests for above functionality

### Add logout template page
- [x] User can logout after confirming
- [x] User gets redirected to login page after logout
- [x] User get redirected to login page if not logged in
- [x] User gets redirected to dashboard page after denying confirmation
- [x] Tests for above functionality

### Add register template page
- [x] Add register template page
- [x] Redirect user to dashboard page if already logged in
- [x] Add register action endpoint
- [x] Redirect user to login page after successful registration
- [x] Redirect user to error register page if registration fails
- [x] Redirect user to dashboard if already logged in
- [x] Register button on login page redirects to register page
- [x] Tests for above functionality

## Frontend - V0.7.0

- [x] Redirect to login page if not logged in
- [x] Add logout functionality

## Backend - V0.9.1

- [x] Fix average price, should return only 2 places after the decimal point

## Backend - V0.10.0

- [x] Add functionality for multiple shopping items on a shopping list
- [x] View all items created by yourself
- [x] View all items
- [x] View all stores created by yourself
- [x] View all stores
- [x] View store details
- [x] View item details
- [ ] Create stores
- [ ] Create items
- [ ] Edit stores
- [ ] Edit items
- [ ] Delete stores
- [ ] Delete items
- [ ] Change dashboard current endpoint to return total budget amount instead of average item price

## Frontend - V0.7.1

- [x] Link Dashboard to user items page
- [ ] Change average item price to total budget amount

## Server - V0.5.0

- [x] PGadmin now gets started with docker-compose

## Backend - V1.1.0

- [ ] Add functionality for wishlists
- [ ] Add functionality for linking to online stores
