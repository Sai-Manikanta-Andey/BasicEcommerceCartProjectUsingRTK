import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/CartSlice'

const Products = () => {
    const [products,setProducts] = useState([])
    const dispatch = useDispatch()
    const handleAdd = (product)=>{
        dispatch(add(product))
    }


    useEffect(()=>{
        const fetchProducts =async ()=>{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json()
        console.log(data);
        setProducts(data)
    }
    fetchProducts()
    },[])

    return (
    <div className='productsWrapper'>
        {
            products.map((product)=>(
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4> {product.title} </h4>
                    <h4> {product.price} </h4>
                    <button className='btn' onClick={()=>handleAdd(product)} >Add To Cart </button>
                </div>
            ))
        }
    </div>
    )
}

export default Products