import React from 'react';
import "./App.css";
import { useState } from "react";

const ConditionalComponent = () => {

    const [products, setProducts] = useState("Products");

    return (
        <div>
            <div className="conditional-header">
                <h2 className={`link ${products === "Products" ? ` active` : null}`} onClick={() => setProducts("Products")}>Products</h2>
                <h2 className={`link ${products === "Contact" ? ` active` : null}`} onClick={() => setProducts("Contact")}>Contact us</h2>
            </div>
            <div className="conditional-body">
                {products === "Products" ? <h1>Products page</h1> : <h1>Contact us page</h1>}
            </div>

        </div>
    )
}

export default ConditionalComponent;