import { createContext } from "react";
import { products } from "../Assets/Assets.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "R";
    const deliveryFee = 10;

    const value = {
        products,
        currency,
        deliveryFee,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
