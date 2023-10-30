import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingBag, } from "react-icons/fa";
import logo from '../assets/icons/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    //handelLogOut
    const handelLogOut = () =>{
        logOut()
        .then(() =>{

        })
        .catch(() =>{
            
        })
    }
    
    const navbarLinks = <>
        <NavLink to ='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/about' ><li><a>About</a></li></NavLink>
        <NavLink to ='services'><li><a>Services</a></li></NavLink>
        <NavLink to ='blogs'><li><a>Blog</a></li></NavLink>
        <NavLink to ='/contact'><li><a>Contact</a></li></NavLink>
        {
            user?.email? <>
              <NavLink to ='/orders'><li><a>My orders</a></li></NavLink>
            <button onClick={handelLogOut}><li><a>Log Out</a></li></button>
            </>:
            <NavLink to ='/login'><li><a>Login</a></li></NavLink>
        }
    </>
    
    return (
        <div className="navbar bg-base-100 md:py-4 ">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navbarLinks}
                        
                    </ul>
                </div>
                <Link>
                    <img src={logo} alt="logo" />
                    <h2 className="text-xl font-bold">Car Doctor</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2 text-xl text-[#444] font-semibold">
                {navbarLinks}
                </ul>
            </div>
            <div className="navbar-end gap-10">
                <div className="flex gap-5 text-xl">
                   <FaShoppingBag></FaShoppingBag>
                    <FaSearch></FaSearch>
                </div>
                <a className="btn border-2 rounded-lg capitalize bg-[#fff] border-[#FF3811] font-semibold">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;