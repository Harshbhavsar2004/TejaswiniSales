import React from 'react'
import './offers.css'
import exclusive_img from '../Assests/exclusive_image.png'
const Offers = () => {
function harsh(){
  window.location.href= "/Store"
}

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={harsh}>Check now</button>
      </div>
      <div className="offers-right">
        {/* <img src={exclusive_img} alt="" /> */}
      </div>
    </div>
  )
}

export default Offers