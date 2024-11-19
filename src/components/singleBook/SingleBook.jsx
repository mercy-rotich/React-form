
import { addTocart } from '../../Redux/Features/cartSlice'
import { useDispatch } from 'react-redux'
const SingleBook = ({book,index}) => {
  

  const dispatch = useDispatch();

  const handleCart =(bookItem)=>{
    dispatch(addTocart(bookItem))
  }


  return (
    <div key={index} className="border-2 border-green-500 p-[1rem] justify-center items-center">
            <h4 className="text-green-500 font-semibold text-center">{book.title}</h4>
            <div>
              <img src={book.Image} alt="" className="w-full" />
            </div>
            <p>{book.description}</p>
            <p>{book.price}</p>
            <button className="px-[2.5rem] py-[0.3rem] border border-green-500 hover:bg-transparent hover:text-green-500 bg-green-500 text-white text-sm  " onClick={()=>{handleCart(book)}}>ADD TO CART</button>
          </div>
  )
}

export default SingleBook