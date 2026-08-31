# EniKicks

A shoe e-commerce storefront built with React — product browsing, search and category filtering, cart, wishlist, checkout, and order history, all running fully client-side (no backend required).

**Live demo:**https://ecommerce-react-website-ixv93ntmo-enny6.vercel.app

---

## Features

- **Browse & search** — full product grid with a live search bar and category filter chips (Running, Trail, Casual, High-Top, Slip-On, Boots)
- **Product details** — dedicated page per product with a full description and add-to-cart
- **Cart** — add, remove, and adjust quantities, with a live subtotal/total
- **Wishlist** — save products with a heart toggle, view them all on a dedicated page
- **Checkout** — a real checkout flow with an order confirmation screen (no alerts)
- **Order history** — past orders are saved and viewable per account, newest first
- **Auth flow** — sign up, then log in, with protected routes that redirect unauthenticated visitors to the login screen
- **Fully responsive** — including a working hamburger menu on mobile
- **No backend** — accounts, cart, wishlist, and orders all persist in the browser via `localStorage`, scoped per signed-up user

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) for routing and protected routes
- [React Hook Form](https://react-hook-form.com/) for form validation (auth)
- React Context API for state management (auth, cart, wishlist, orders)
- Plain CSS with custom properties — no CSS framework

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Oyegbule/<repo-name>.git
cd <repo-name>
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProtectedRoute.jsx
├── context/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   ├── WishlistContext.jsx
│   └── OrderContext.jsx
├── data/
│   └── products.js
├── pages/
│   ├── Home.jsx
│   ├── Auth.jsx
│   ├── Checkout.jsx
│   ├── ProductDetails.jsx
│   ├── Wishlist.jsx
│   └── Orders.jsx
├── App.jsx
└── App.css
```

## How Auth Works (No Backend)

Since there's no server, "accounts" are just entries in `localStorage`:

- **Sign up** registers `{ email, password }` in a `users` list and sends you to the login screen.
- **Log in** checks your credentials against that list and, on success, marks you as the current user.
- **Protected routes** (`Home`, `Checkout`, `ProductDetails`, `Wishlist`, `Orders`) redirect to `/auth` if no one's logged in.
- **Wishlist and order history** are scoped per account, keyed by email, so switching accounts on the same browser doesn't mix up data.

This is a demo pattern only — passwords are stored in plain text and there's no real security. It's meant to showcase frontend logic, not to be production-ready auth.


## Author

**Oyegbule Eniola** — Frontend Engineer

- Email: [oyegbuleeniola06@gmail.com](mailto:oyegbuleeniola06@gmail.com)
- GitHub: [github.com/Oyegbule](https://github.com/Oyegbule)
- LinkedIn: [linkedin.com/in/oyegbule-eniola](https://www.linkedin.com/in/oyegbule-eniola-08785335b)
