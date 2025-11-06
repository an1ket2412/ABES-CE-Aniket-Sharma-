import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div id="card">
      <h1>{props.name}</h1>
      <img src={props.img} alt="" height={100} width={100} />
      <h3>{props.rate}</h3>
    </div>
  );
}

export default Card