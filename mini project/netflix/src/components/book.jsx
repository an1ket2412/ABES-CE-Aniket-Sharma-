import React, { useState } from "react";
import "./book.css";

function Book(props) {
  const [count, setCount] = useState(0); // ✅ state for quantity

  return (
    <div id="book">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnVp3abpKHU6VI-9TV3Rova8rKtVHp-b0Sg&s"
        alt={props.title}
        height={100}
        width={100}
      />
      <h1>Title: {props.title}</h1>
      <h1>Price: {props.Price}</h1>

      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span style={{ margin: "10px" }}>{count}</span>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      </div>
    </div>
  );
}

export default Book;
