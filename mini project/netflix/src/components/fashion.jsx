import React from 'react'
import './fashion.css'
import Fashion from './fashion'
function fashion(props) {
  return (
    <div>
        <img src={props.image} alt="" height={100} width={100}/>
        <h4>Title:{props.title}</h4>
        <h4>Price:{props.price}</h4>
    </div>
  )
}

export default fashion