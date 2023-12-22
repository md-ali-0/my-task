import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Menus = () => {
    return (
        <>
            <NavLink
                to="/"
                className="text-gray-800 text-sm font-semibold hover:text-primary mr-4"
            >
                Home
            </NavLink>
            <NavLink
                to="about"
                className="text-gray-800 text-sm font-semibold hover:text-primary mr-4"
            >
                About
            </NavLink>
            <NavLink
                to="/Contact"
                className="text-gray-800 text-sm font-semibold hover:text-primary mr-4"
            >
                Contact
            </NavLink>
        </>
    );
};
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        // Header
        <header className="bg-gray-100 font-sans w-full m-0">
            <div className="bg-white shadow">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <div>
                            <img className="w-32" src={logo} alt="" />
                        </div>
                        <div className="hidden sm:flex sm:items-center">
                            <Menus/>
                        </div>
                        <div className="hidden sm:flex sm:items-center">
                            <Link
                                to='/login'
                                className="text-gray-800 text-sm font-semibold hover:text-primary mr-4"
                            >
                                Sign in
                            </Link>
                            <Link
                                to='/register'
                                className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-primary hover:border-primary"
                            >
                                Sign up
                            </Link>
                        </div>
                        <div onClick={()=>setOpen(!open)} className="sm:hidden cursor-pointer">
                            <FaBars />
                        </div>
                    </div>
                    <div className={open?'block sm:hidden bg-white border-t-2 py-2':'hidden'}>
                        <div className="flex flex-col">
                            <Menus/>
                            <div className="flex justify-between items-center border-t-2 pt-2">
                                <Link
                                    to='/login'
                                    className="text-gray-800 text-sm font-semibold hover:text-primary mr-4"
                                >
                                    Sign in
                                </Link>
                                <Link
                                    to='/register'
                                    className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-primary hover:border-primary"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
