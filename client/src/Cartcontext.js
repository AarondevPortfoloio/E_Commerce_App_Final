import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

{/*ddd const addToCart = (item) => {
    // Use function form of setState to ensure the latest cart state is used
    console.log('Adding item to cart:', item); 
    setCart((prevCart) => {
        const updatedCart = [...prevCart, item];
        console.log('Updated cart after adding item:', updatedCart);  // Log the updated cart
        return updatedCart;
      });
  };
*/}

function addToCart(item) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }


 // deleteToCart function



function deleteToCart(item) {
  setCart((prevCart) => {
    return prevCart.map((cartItem) => {
      if (cartItem.name === item.name) {
        // Decrease quantity by 1, or remove item if quantity is 1
        if (cartItem.quantity === 1) {
          return null; // Mark for removal
        }
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    }).filter(item => item !== null); // Remove any null items
  });
}



















  return (
    <CartContext.Provider value={{ cart, addToCart, deleteToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);