
import { useSelector } from "react-redux";

import { booksModel } from "../models/BooksModel";

import SingleBook from "../components/singleBook/SingleBook";

const Books = () => {

  const price = useSelector((state)=>state.cart.price)

  const numberOfCartItems = useSelector((state)=>state.cart.numberOfCartItems)
  // const [ cartItems,setCartItems ] = useState([])

  // const [numberOfCartItems,setNumberOfCartItems] = useState(0);
  // const [price,setPrice]= useState(0)

  // const addToCart = (bookItem) =>{

  //   const customCartItems = [...cartItems,bookItem];

  //   setNumberOfCartItems(customCartItems.length)

  //   setCartItems(customCartItems);

  //   const prices = customCartItems.map((item)=>item.price);

  //   setPrice(prices.reduce((a,b)=>a+b,0));


  // }

  return (
    <div className="p-[2rem]">
      <div className="text-center">
        <p>
          CART ITEMS {""} {numberOfCartItems}
        </p>
        <p>Total Charge:{""} sh.{price}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-5 ">
        {booksModel.map((book, index) => (
        <SingleBook book={book} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Books;