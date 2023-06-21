import React from "react";
import Products from "./Products";
import data from './data.json';
function Section({
    value,
    removeCart,
    addToCart,
    showRemoveCart = false
  }){
    return(
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {data.map((value)=>{
                        return <Products imageURL={value.imageURL} name={value.name} price={value.price}/>
                    })}
                </div>
            </div>
            
        </section>
    )
}
export default Section