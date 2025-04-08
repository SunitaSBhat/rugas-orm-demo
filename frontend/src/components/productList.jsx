import React, { useState, useEffect } from 'react';
import './productList.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reduxs/counterslice';
import Nav from "./nav";
export default function ProductList() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [productData, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.in/api/products?page=1&limit=20')
      .then(response => response.json())
      .then(data => {setProduct(data.products)} )
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return ( 
    <>
    <Nav/>
    <div className="main">
      <h1>Hey Have a look ar our products!!</h1>
    <div className='product'>
  {productData.map((pdata, index) => (
    <div key={index} className='product-card'>
      <h1>{pdata.category}</h1>
      <img src={pdata.image} />
      <h2>{pdata.title}</h2>
      <p> ₹{pdata.price}</p>
          <p>⭐ {pdata.rating?.rate} ({pdata.rating?.count} reviews)</p>

      <button>Add to Cart</button>
      <div id="increment">
      <h1>Number Of Products: {count}</h1>
      <p id="bt"onClick={() => dispatch(increment())}>+</p>
      <p id="bt1" onClick={() => dispatch(decrement())}>-</p>
    </div>
    </div>
  ))}
</div>
</div> 
</> 
  );
}

