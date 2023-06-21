import React from "react";
function Products({imageURL,name,price,value,
  removeCart,
  addToCart,
  showRemoveCart = false}){
    return(
        <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src={imageURL} alt="..." />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">{name}</h5>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {price}
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" >Add to Cart</a></div>
                            </div>
                        </div>
                    </div>
    )
}
export default Products