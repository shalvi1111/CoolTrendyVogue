import { createContext } from "react";
import { products } from "../../public/font-awesome/images/assets";

 export const ShopContext = createContext();

 const shopContextProvider =(e)=>{
     const currency = "₹";
     const delivery_fee = 70
      const value = {
        products , currency , delivery_fee
      }
      return(
        <ShopContext.Provider value={value}>
           {e.children}
        </ShopContext.Provider>
      )
 }
 module.exports= shopContextProvider;

  
