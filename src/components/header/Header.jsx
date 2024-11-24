import ReactLogo from "../../assets/react.svg";
import NavItems from "../navitems/NavItems";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="h-[50px w-full py-[0.5rem] px-[1rem] border-b border-green-500 mb-[1rem] flex justify-between items-center">
      <div>
        <img src={ReactLogo} alt="" className="w-[30px] h-30px]" />
      </div>
 
      <div>
        <NavItems navItems={props.navItems} />
      </div>

      <button
        onClick={props.increaseCounter}
        className="py-1 px-3 bg-blue-500 text-white mr-1"
      >
        INCREMENT
      </button>
      <button
        onClick={props.decreaseCounter}
        className="py-1 px-3 bg-blue-500 text-white"
      >
        DECREMENT
      </button>
      <Link to="/books" className="px-[2rem] py-[0.3rem] border-2 text-white rounded-sm border-green-500 bg-green-500 hover:bg-transparent hover:text-green-400">Books</Link>

      <div className="flex items-center ">
        <img src={ReactLogo} alt="" className="w-[30px] h-[30px] mr-[10px]" />
        <p>
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default Header;
