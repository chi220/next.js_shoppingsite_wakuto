'use client' // クライアント側でレンダリングする宣言
import React, { useEffect, useState } from 'react'
import './shop.css';

function Shop() {
    
    const [items, setItems] = useState([]);
    // API
    // useEffect(() => {}, [])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setItems(json); // reactではitems=値ができない
        });
    },[]);

  return (
    <div>
        <div className="shopTitle">
            <h1>E-commerce Shop</h1>
        </div>

        <div className="products">
            {items.map((item) => (
                <div key={item.id} className="product">
                    <div className="content">
                        <p className="title">
                            {item.id}. {item.title}
                        </p>
                        <img src={item.image} alt={item.title} className="image" />
                        <p className="price">${item.price}</p>
                        <p className="description">{item.description}</p>
                        <p className="category">{item.category}</p>
                    </div>
                    <button className="addToCartBtn">ADD</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Shop