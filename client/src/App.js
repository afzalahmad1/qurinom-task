import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import AddProduct from "./components/AddProduct";
import Products from "./pages/Products";

function App() {
  const [type,setType] = useState("user");
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home setType={setType}/>} />
        <Route path="/login" element={<Login type={type}/>} />
        <Route path="/signup" element={<Signup type={type}/>} />
        <Route path="/merchant" element={<AddProduct/>} />
        <Route path="/product" element={<Products/>} />
      </Routes>

    </div>
  );
}

export default App;
