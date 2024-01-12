import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/index.jsx";
import ProductsPage from "./pages/products/index.jsx";
import ProductPage from "./pages/product/index.jsx";
import CartPage from "./pages/cart/index.jsx";
import LoginPage from "./pages/login/index.jsx";
import AccountPage from "./pages/account/index.jsx";
import RegisterPage from "./pages/register/index.jsx";
import HeaderLayout from "./layouts/HeaderLayout.jsx";
import ErrorPage from "./pages/error/index.jsx";
import UserContextProvider from "./contexts/UserContext/UserContextProvider.jsx";
import CartContextProvider from "./contexts/CartContext/CartContextProvider.jsx";
import { useContext } from "react";
import CartContext from "./contexts/CartContext/CartContext.jsx";

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/nos-produits", element: <ProductsPage /> },
      { path: "/produit/:id", element: <ProductPage /> },
      { path: "/panier", element: <CartPage /> },
      { path: "/connexion", element: <LoginPage /> },
      { path: "/inscription", element: <RegisterPage /> },
      { path: "/mon-compte", element: <AccountPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <RouterProvider router={router}>
            <HeaderLayout />
          </RouterProvider>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
