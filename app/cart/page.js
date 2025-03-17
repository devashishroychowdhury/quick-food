"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/navbar";

function CartPage() {
  const { cart, setCart } = useCart();

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, amount) => {
    setCart((prevCart) => {
      return prevCart.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-center mt-8">Shopping Cart</h1>
      <div className="product-list mt-6">

      <div className="p-4 mt-12 border rounded-lg shadow-lg">
        {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
        ) : (
            <>
            <p className="text-center font-semibold">Total Items: {cart.length}</p>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center border-b p-6">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p>({item.cuisine}) - {item.caloriesPerServing} Calories</p>
                      <p>Price: ${item.price?.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="bg-gray-300 px-2 py-1 rounded"
                          onClick={() => updateQuantity(index, -1)}
                          >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="bg-gray-300 px-2 py-1 rounded"
                          onClick={() => updateQuantity(index, 1)}
                          >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => removeFromCart(index)}
                    >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="text-xl font-bold text-center mt-4">Total Price: ${totalPrice.toFixed(2)}</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                onClick={clearCart}
                >
                Clear Cart
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
        </div>
  );
}

export default CartPage;
