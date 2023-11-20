import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const cartInitialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => {
    const updatedCart = state.cartList.concat(product);
    updateTotal(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.cartList.filter(
      (item) => item.id !== product.id
    );
    updateTotal(updatedCart);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  function clearCart(){
    dispatch({
      type: 'CLEAR_CART',
      payload: {
        products: [],
        total: 0,
      }
    })
  }

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
    clearCart

  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
const context = useContext(CartContext);
return context
}
