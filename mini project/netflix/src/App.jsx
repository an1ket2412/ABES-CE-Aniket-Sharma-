import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Book from "./components/book";
import Login from "./components/login";
import Register from "./components/register";
import Cart from "./components/cart"; // ✅ Import Cart
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div id="adi">
        <Routes>
          <Route
            path="/"
            element={
              <div className="books-container">
                <Book title="Math" Price={200} />
                <Book title="Physics" Price={500} />
                <Book title="Chemistry" Price={900} />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} /> {/* ✅ Cart route */}
        </Routes>
      </div>
    </>
  );
}

export default App;
