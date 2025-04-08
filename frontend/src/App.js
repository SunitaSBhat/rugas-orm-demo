import logo from './logo.svg';
import './App.css';
import CreateAccount from "./components/CreateAccount";
import Login from "./components/login";
import CustomerOnboarding from "./components/customerOnboarding";
import ProductList from './components/productList';
import Product from "./components/customerAndProduct";
import OrderList from "./components/OrderList";
import Home from "./components/Home";
import Nav from "./components/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home/>}/>
     <Route path="/CreateAccount" element={<CreateAccount/>}/>
     </Routes>
     <Routes>
     
     <Route path="/Login" element={<Login/>}/>
     <Route path="/CustomerOnboarding" element={<CustomerOnboarding/>}/>
     <Route path="/Order" element={<Product/>}/>
     <Route path="/productList" element={<ProductList/>}/>
     <Route path="/orderList" element={<OrderList/>}/>
     </Routes>
    </div>
  );
}

export default App;
