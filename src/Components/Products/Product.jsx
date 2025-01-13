// filepath: /c:/Users/mckec/Documents/Coding/Booklidio E-Commerce Store/booklidio-ecom-store/src/Components/Products/Item.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Product({ id, image, name, description, price }) {
    const { currency } = useContext(ShopContext);
    return (
        <section>
            <Link className="" to={`/product/${id}`}>
                <div>
                    <img className="w-10 h-10" src={image} alt={name} />
                </div>
                <h2>{name}</h2>
                <h3>
                    {currency}
                    {price}
                </h3>
                <p>{description}</p>
            </Link>
        </section>
    );
}

export default Product;
