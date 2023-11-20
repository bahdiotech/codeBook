import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import {BsCartPlus, BsTrash} from 'react-icons/bs'
import { useCart } from "../../context";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const [inCart, setInCart] = useState(false)
  const {id, name, overview, price, image_local, rating, best_seller} = product;
  const { cartList, addToCart, removeFromCart } = useCart();


  useEffect(() => {
    const productIsInCard = cartList.find(cartItem => cartItem.id === id)
    if (productIsInCard){
      setInCart(true)
    } else {
      setInCart(false)
    }
  }, [cartList, id]);

  return (
    <div className="w-full max-w-sm bg-white border m-4 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`}>
        {best_seller && <span className="absolute text-base bg-orange-400 p-1 rounded-r-md mt-4 w-32 flex justify-center items-center text-slate-50 z-10">Best Seller</span>}
        <img
          className="p-0 mb-6 max-h-64 rounded-t-lg"
          src={image_local}
          alt={name}
          title={name}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/products/${id}`}>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h2>
          <p className="text-base mt-4 text-slate-900 dark:text-slate-300">
            {overview}
          </p>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <Rating rating={rating} />
          
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          {/* <span className="text-base p-0 m-3 font-bold  dark:text-yellow-300 text-gray-900">
          <label htmlFor="quantity">Qty :</label>
              <input className="rounded ml-2 p-0 h-7 bg-transparent" type="number" id="quantity" name="quantity" required min={1} max={10}/>
          </span> */}
          <div>
         { !inCart &&(<button onClick={() =>addToCart(product)} disabled={product.in_stock? '' : 'disabled'} className="text-white disabled:cursor-not-allowed  flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add To Cart <span className="ml-2 text-xl text-yellow-300"><BsCartPlus /></span>
          </button>)}
          { inCart && <button onClick={() => removeFromCart(product)} className="text-white flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Remove <span className="ml-2 text-xl text-white-300"><BsTrash /></span>
          </button>}
          </div>
          
        </div>
      </div>
    </div>
  );
};
