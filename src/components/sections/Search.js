import React, { useRef } from "react"; //useState 
import { BsSearch } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router";
// import { useTitle } from "../../hook/useTitle";

export const Search = ({setToggle, setSideNav, setDropDown}) => {
    // const [value, setValue] = useState('')
  const navigate = useNavigate();
  const SearchRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?q=${SearchRef.current.value}`);
    setToggle(false)
    setSideNav(false)
    
  };

//   useTitle(`Search Result for ${value}`)
//    function handChange(e){
//     setValue(e.target.value)
//     navigate(`/products?q=${value}`)
//    }

  return (
    <div
      className={`other:m-3 slide bg-gray-300  dark:bg-gray-200 ml-2 focus:outline-none other:h-10 h-8 rounded-full flex items-center px-2 w-[300px] sm:w-[300px] lg:w-[370px]`}
    >
      <FcSearch className=" text-xl" />
      <form
        onSubmit={handleSubmit}
        className="flex justify-center other:z-10 items-center"
      >
        <input
          ref={SearchRef}
          className="bg-transparent  h-8 rounded-full flex items-center focus:bg-transparent px-2 w-[230px] sm:w-[230px] lg:w-[300px]  focus:outline-none focus:ring-0 focus:border-none border-none "
          type="text"
          placeholder="search books"
          name="search"
        //   onChange={handChange}
          autoCorrect="none"
        //   value={value}
        />
        <button
          className=" h-7 rounded-full flex justify-center bg-blue-600 hover:bg-blue-700 text-[1rem] w-8 text-white items-center text-sm  border-none"
          type="submit"
        >
          <BsSearch />
        </button>
      </form>
    </div>
  );
};
