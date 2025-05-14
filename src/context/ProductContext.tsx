'use client'

import { createContext, ReactNode, useContext, useState } from "react";
import defaultProduct from '@/data/products.json'
import { error } from "console";


type Product = {
    id:number;
    name:string;
    category:string;
    stock:number;
    price:number;
    image:string
    
    
}
type ProductContexType = {
    products:Product[];
    addProduct:(products:Product)=>void;
}
const ProductContext = createContext<ProductContexType | undefined>(undefined);



export const ProductProvider = ({children}:{children:ReactNode}) => {
    const [products,setProducts] = useState<Product[]>(defaultProduct);
    const addProduct = (product:Product)=>{
        setProducts(prev => [...prev,{
            ...product,id:prev.length+1
        }])
    }
    
  return (
    <ProductContext.Provider value={{products,addProduct}}>
        {children}

    </ProductContext.Provider>
   
  )
};
export const useProducts = ()=>{
    const context = useContext(ProductContext);
    if(!context) {
        throw new Error('UsedProduct must be is used inside the wrapper ProductProvider')
    }
    return context
}




