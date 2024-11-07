import ReactLogo from "../../assets/react.svg"
import NavItems from "../navitems/NavItems"

const Header = ({name,navItems}) => {
  return (
    <div className="h-[50px w-full py-[0.5rem] px-[1rem] border-b border-neutral-300 mb-[1rem] flex justify-between items-center">
    <div>
        <img src={ReactLogo}alt="" className="w-[30px] h-30px]"/>
    </div>
    
    <div>
       <NavItems navItems={navItems}/>
    </div>

    <div className="flex items-center ">
         <img src={ReactLogo} alt="" className="w-[30px] h-[30px] mr-[10px]" />
         <p>{name}</p>
    </div>
    </div>
  )
}

export default Header