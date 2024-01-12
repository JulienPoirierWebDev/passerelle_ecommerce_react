import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useContextValue } from "../../contexts/CartContext/CartContextProvider";
import CartContext from "../../contexts/CartContext/CartContext";
import * as useFetch from "../../hooks/useFetch";
import "@testing-library/jest-dom";

import ProductPage from "./index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => {
    return {
      id: "123",
    };
  },
}));

const CustomRender = ({ initialCart }) => {
  const { addToCart, isProductInCart, getQuantityInCart, removeOneToCart } =
    useContextValue(initialCart);

  return (
    <CartContext.Provider
      value={{ addToCart, isProductInCart, getQuantityInCart, removeOneToCart }}
    >
      <ProductPage />
    </CartContext.Provider>
  );
};

describe("ProductPage", () => {
  test("ProductPage avec contexte spécifique", async () => {
    const mData = {
      name: "Bob",
      description: "Une figurine de Bob",
      price: 20,
      stock: 5,
      mainImageURL: "https://via.placeholder.com/150",
      _id: "123",
      category: {
        name: "Figurines et Collectibles",
        _id: "456",
      },
    };
    const mResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mData),
    };
    global.fetch = jest.fn().mockResolvedValue(mResponse);

    // test useContextValue mock

    await render(<CustomRender initialCart={[]}></CustomRender>);

    await waitFor(() => {
      expect(screen.getByText("Bob")).toBeInTheDocument();
      expect(screen.getByText("Une figurine de Bob")).toBeInTheDocument();
      expect(screen.getByText("20 €")).toBeInTheDocument();
      expect(screen.getByText("En stock : 5")).toBeInTheDocument();
      expect(screen.getByText("Ajouter au panier")).toBeInTheDocument();
    });
  });
});
