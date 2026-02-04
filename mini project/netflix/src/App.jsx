import React, { useEffect, useState } from 'react'
import Fashion from './components/fashion'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      {products.map((item, index) => (
        <Fashion key={index} product={item} />
      ))}
    </div>
  )
}

export default App
