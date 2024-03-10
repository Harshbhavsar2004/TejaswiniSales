import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assests/data'
import Item from '../item/Item'
import { useState , useEffect } from 'react'
const RelatedProduct = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {

    fetch('https://backend3-9t1m.onrender.com/newcollections')
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, [])

  return (
    <div className='Newcollections'>
      <h1>Related Products</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProduct