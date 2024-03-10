import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { Shopcontext } from '../../Context/ShopContect'
import product_image1 from './il_794xN.3351391777_robn.jpg'
import product_image2 from './Productimage_1200x (1).jpg'
import product_image3 from './il_300x300.3259564087_6f5j.png'
import product_image4 from './il_794xN.4405116575_2suo.png'

const Productdisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(Shopcontext);

    

    return (
        <div className='Productdisplay'>
            <div className="Productdisplay-left">
                <div className="Productdisplay-img-list">
                    <img src={product_image1} alt="" />
                    <img src={product_image3} alt="" />
                    <img src={ product_image4} alt="" />
                </div>
                <div className="Productdisplay-img">
                    <img className='Productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="Productdisplay-right">
                <h1>{product.name}</h1>
                <div className="Productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="Productdisplay-right-prices">
                    <div className="Productdisplay-right-old"><i class="fa-solid fa-indian-rupee-sign"></i>{product.old_price}</div>
                    <div className="Productdisplay-right-new"><i class="fa-solid fa-indian-rupee-sign"></i>{product.new_price}</div>
                </div>
                <div className="Productdisplay-right-description">
                    Shield your eyes with our TC Screen Guard for ultimate protection and comfort while using digital devices
                </div>
                <button onClick={() => {
                    addToCart(product.id)
                    var errorPopup = document.getElementById("errorPopup");
                    errorPopup.style.display = "block";
                    setTimeout(function () {
                        errorPopup.style.display = "none";
                    }, 3000);
                }}
                    className='Harsh'>ADD TO CART</button>
            </div>
            <div id="errorPopup" className="error-popup">
                <span className="close" onClick={() => {
                    var errorPopup = document.getElementById("errorPopup");
                    errorPopup.style.display = "none";
                }}>&times;</span>
                <p>Item added to the Cart<i className="fa-solid fa-cart-shopping"></i> </p>
            </div>
        </div>

    )
}

export default Productdisplay