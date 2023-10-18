import React from 'react'
import { remove } from '../store/CartSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector(state=> state.cart)
  const dispatch = useDispatch()
  const handleRemove = (productID)=>{
    dispatch(remove(productID))
  }

  return (
    <div>
      
        
          {
          cartItems.length === 0? <h1>Cart is empty</h1> :cartItems.map((eachProduct) => (
        <div className="cartCard" key={eachProduct.id}>
          <img src={eachProduct.image} alt="" />
          <h4> {eachProduct.title} </h4>
          <h5> {eachProduct.price} </h5>
          <button onClick={()=>handleRemove(eachProduct.id)}>Remove</button>
        </div>
      ))
        }
        
      
      
    </div>
  );
}

export default Cart