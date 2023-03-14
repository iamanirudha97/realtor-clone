import { useLocation, useNavigate } from "react-router"
import { NavLink } from "react-router-dom"
export default function Header() {    
    
    const navigate = useNavigate()

    // const location = useLocation()
    // const pathMatchRoute = (route) => {
    //     if(route === location.pathname){
    //         return true
    //     }
    // }

    const classNames = "block py-3 text-sm font-semibold border-b-[3px] border-b-transparent text-gray-400"

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo"
                className="h-5 cursor-pointer"
                onClick={() => navigate("/")} />
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li>  <NavLink className={({isActive}) => (isActive ? classNames + '!text-black !border-b-red-500' : classNames)} exact to='/'>  Home </NavLink> </li>
                    <li>  <NavLink className={({isActive}) => (isActive ? classNames + '!text-black !border-b-red-500' : classNames)} to="/offers">  Offers </NavLink> </li>
                    <li>  <NavLink className={({isActive}) => (isActive ? classNames + '!text-black !border-b-red-500' : classNames)} to="/sign-in">  Sign In </NavLink> </li>                                     
                </ul>
            </div>
        </header>
    </div>
  )
}