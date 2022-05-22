import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import { useState, useEffect } from 'react'
import './Product.css'


const Products = () => {

 const[productInfo , setProduct]  = useState([])
  
  useEffect(() => {
       fetch("https://fakerapi.it/api/v1/products?_quantity=8")
       .then(response => response.json())
       .then(data => setProduct(data.data))
  }, [])
 
  
  

  return (
    <div className='productPage'>
      <Sidebar/>
   <div className='product-page-main'>
      {
        productInfo? productInfo.map((product, idx) =>(
              <div key={idx} className= "product-card">
                <div id='image'><img src={product.image} alt="product"/> </div>
                <h2>{product.name}</h2>
                <p>Price : {product.price}</p>
                <p>Taxes : {product.taxes}</p>
                <p>Net Price : {product.net_price}</p>
            </div>
             )) : null
           }

   </div>

      Products</div>
  )
}

export default Products