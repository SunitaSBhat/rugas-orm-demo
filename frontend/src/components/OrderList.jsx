import React, { useState, useEffect } from 'react';
import "./orderList.css";
export default function OrderList() {
  const [orderData, setOrderData] = useState([]);
  const [filter, setFilter] = useState({
    customer: '',
    category: '',
    status: '',
  });

  useEffect(() => {
    fetch('https://rugas-orm-demo-xi.vercel.app/user/allOrders')
      .then((res) => res.json())
      .then((data) => {
       
        const updatedData = data.map((order)=>({
            
                ...order, status:order.status|| "Placed",
            }))
       
        setOrderData(updatedData);
      })
      .catch((error) => {
        console.log(error);
        alert('Something went wrong!');
      });
  }, []);

 
  const uniqueCustomers = [...new Set(orderData.map((order) => order.customer))];
  const uniqueCategories = [...new Set(orderData.map((order) => order.product?.category))];


  const filteredOrders = orderData.filter((order) => {
    const customerMatch = filter.customer==='' || order.customer===filter.customer;
    const categoryMatch = filter.category === '' || order.product?.category === filter.category;
    const statusMatch = filter.status === '' || order.status === filter.status;
    return customerMatch && categoryMatch && statusMatch;
  });

  
  const updateOrderStatus = (id, newStatus) => {
   const updatedData= orderData.map((order)=>
    order._id===id ? {...order, status:newStatus}:order
)
   setOrderData(updatedData);
  };

  return (
    <div>
      <div className="order-container">
  <h1 className="order-title">Your Orders</h1>

  <div className="order-filters">
    <select onChange={(e) => setFilter({ ...filter, customer: e.target.value })}>
      <option value="">All Customers</option>
      {uniqueCustomers.map((cust, index) => (
        <option key={index} value={cust}>{cust}</option>
      ))}
    </select>

    <select onChange={(e) => setFilter({ ...filter, category: e.target.value })}>
      <option value="">All Categories</option>
      {uniqueCategories.map((cat, index) => (
        <option key={index} value={cat}>{cat}</option>
      ))}
    </select>

    <select onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
      <option value="">All Statuses</option>
      <option value="Placed">Placed</option>
      <option value="Shipped">Shipped</option>
      <option value="Delivered">Delivered</option>
    </select>
  </div>

  <div className="order-list">
    {filteredOrders.map((order, index) => (
      <div key={index} className="order-card">
        <div className="order-details">
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Product:</strong> {order.product?.title}</p>
          <p><strong>Category:</strong> {order.product?.category}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>

        <img src={order.product?.image} alt="product" className="order-image" />

        <div className="order-status-update">
          <label>Update Status:</label>
          <select
            value={order.status}
            onChange={(e) => updateOrderStatus(order._id, e.target.value)}
          >
            <option value="Placed">Placed</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}


