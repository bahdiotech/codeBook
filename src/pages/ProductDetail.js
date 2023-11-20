import React, { useEffect, useState } from "react";
import { BsCartPlus, BsTrash } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Rating } from "../components/elements/Rating";
import { useCart } from "../context";
import { useTitle } from "../hook/useTitle";
import { getProduct } from "../services";

export const ProductDetail = () => {
  const [inCart, setInCart] = useState(false)
  const [product, setProduct] = useState({});
  const { cartList, addToCart, removeFromCart } = useCart();

  const param = useParams();
  useEffect(() => {
    async function fetchProducts() {

    try {
      const data = await getProduct(param);
      setProduct(data);
    
    }
     catch (error) {
      toast.error(error.message, { closeButton: true, position: "bottom-center" });
    }
  }
    fetchProducts();
  }, [param]);
  useEffect(() => {
    try {
      const productIsInCard = cartList.find(cartItem => cartItem.id === product.id)
      if (productIsInCard) {
        setInCart(true)
      } else {
        setInCart(false)
      }
    } catch (error) {
      toast.error(error.message, { closeButton: true, position: "bottom-center" });
    }
    
  }, [cartList, product.id]);
useTitle(product.name)

  return (
    <main>
      <h2 className="text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
        {product.name}
      </h2>
      <p className="text-base mt-4 text-center text-slate-900 dark:text-slate-300">
        {product.overview}
      </p>
      <div className="flex res880:min-w-[40rem] max-w-[80rem] dark:bg-slate-800 flex-col lg:flex-row dark:text-slate-100 items-center">
        <div
          
          className="visual my-5 lg:max-w-xl max-w-[550px] m-4"
        >
          {/* {best_seller && <span className="absolute text-base bg-orange-400 p-1 rounded-r-md mt-4 w-32 flex justify-center items-center text-slate-50 z-10">Best Seller</span>} */}
          <img
            className="rounded-lg  max-h-full"
            src={product.image_local}
            alt={product.name}
            title={product.name}
          />
        </div>

        <div className="px-5 mt-6 max-w-[550px] pb-5">
          <span className="text-3xl font-semibold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <div className="flex items-center  mt-2.5 mb-5">
            <Rating rating={product.rating} />
            <span className="bg-blue-100 text-blue-800 text-base font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product.rating}.0
            </span>
          </div>
          <div>
            {product.best_seller && (
              <span className="mr-4 text-yellow-400  bg-gray-200 font-medium rounded-md p-2">
                BEST SELLER
              </span>
            )}

            {product.in_stock ? (
              <span className="mr-4 text-green-500 font-medium bg-gray-200 p-2 rounded-md ">
                IN-STOCK
              </span>
            ) : (
              <span className="mr-4 text-red-500 font-medium bg-gray-200 p-2 rounded-md ">
                OUT OF STOCK
              </span>
            )}
            <span className="mr-4 font-medium bg-gray-200 p-2 rounded-md text-blue-500">
              {product.size}MB
            </span>
            <div>
         { !inCart &&<button disabled={product.in_stock? '' : 'disabled'} onClick={() =>addToCart(product)} className="text-white  flex items-center disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg my-5 text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add To Cart <span className="ml-2 text-xl text-yellow-300"><BsCartPlus /></span>
          </button>}
          { inCart && <button onClick={() => removeFromCart(product)} 
          className="text-white flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-xl px-5 py-2.5 my-5 text-center focus:ring-red-300  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Remove <span className="ml-2 text-xl text-white-300"><BsTrash /></span>
          </button>}
          </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div >
              <p className="text-base text-slate-900 dark:text-slate-300">
                {product.long_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
