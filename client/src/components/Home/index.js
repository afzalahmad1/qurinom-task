import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';
const Home = ({setType}) => {
    const navigate  = useNavigate();

    function handleMerchant(){
        setType("merchant");
        navigate("/signup")
    }
    function handleUser(){
        setType("user");
        navigate("/signup")
    }
  return (
    <div className='home-container'>
      <div className='home-flex'>
        <div className="home-item"onClick={handleMerchant}>Merchant Login</div>
        <div className="home-item" onClick={handleUser}>User Login</div>
      </div>
    </div>
  )
}

export default Home
