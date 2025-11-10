import React from "react";
import { useCart } from "./cartcontent";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty!</h2>
      ) : (
        <>
          <table
            style={{
              margin: "20px auto",
              borderCollapse: "collapse",
              width: "80%",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Title
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Quantity
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Price
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Total
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.title}>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                    {item.title}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                    {item.quantity}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                    ₹{item.price}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                    ₹{item.price * item.quantity}
                  </td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item.title)}
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Total: ₹{total}</h2>

          <button
            onClick={clearCart}
            style={{
              marginTop: "15px",
              backgroundColor: "#008cff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
