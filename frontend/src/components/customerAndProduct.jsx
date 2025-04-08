import {React, useState, useEffect} from 'react'
import "./createAccoun.css";
export default function CustomerAndProduct() {
     const [product, setProduct]= useState({
        customer:"",
       product:{}
      })
      const handleChange = (e) => {
        const { name, value } = e.target;
      
        if (name === "product") {
          const selectedProduct = productData.find(p => p.title === value);
          setProduct(prev => ({
            ...prev,
            product: selectedProduct || {} 
          }));
        } else {
          setProduct(prev => ({
            ...prev,
            [name]: value
          }));
        }
      };
      const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
    const res= await fetch("http://localhost:8000/user/order", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    
    const result= await res.json();
    console.log(product);
    alert(result);
        }
        catch(error){
          console.log(error);
          alert("There is an error occured");
        }
      }

       const [productData, setProductData]=useState([]);
          useEffect(()=>{
              const product= fetch('https://fakestoreapi.com/products') .then(response => response.json())
              .then(data =>{ setProductData(data);
             })
              .catch(error => console.error('Error fetching data:', error));
          }, [])
        
         const [customerData, setCustomer]=useState([]);
         useEffect(() => {
            fetch("http://localhost:8000/user/getCustomer")
              .then((res) => res.json())
              .then((data) => {
                setCustomer(data); 

              })
              .catch((error) => {
                console.error("Error fetching data:", error);
              });
          }, []);
          console.log(customerData);
  return (
    <div id="Create" style={{height:"100px", marginTop:"123px"}}>
        <h1>Make Your Order !!</h1>
        <form onSubmit={handleSubmit}>
  <select id="select" name="product" onChange={handleChange}>
    <option >Select a product</option>
    {productData.map((prod, index) => (
      <option key={index} value={prod.title}>{prod.title}</option>
    ))}
  </select>

  <select id="select" name="customer" onChange={handleChange}>
    <option >Select a customer</option>
    {customerData.map((cus, index) => (
      <option key={index} value={cus.name}>{cus.name}</option>
    ))}
  </select>

  <button type="submit" onClick={handleSubmit}>Order</button>
</form>
    </div>
  )
}
