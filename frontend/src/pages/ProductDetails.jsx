import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {id}=useParams()
  const products=[
    {id:1, name: 'mobile', desc: 'with call feature'},
    {id:2, name: 'Laptop', desc: 'with high specs'},
    {id:3, name: 'Keyboard', desc: 'with all keys'},
  ]
  const product=products.find((p)=>(p.id===Number(id)))
  return (
    <div>
      <h1 className="w-100 text-center font-extrabold">product Details</h1>
      <h3>Name:{product.name}</h3>
      <p>description:{product.desc}</p>

    </div>
  )
}

export default ProductDetails