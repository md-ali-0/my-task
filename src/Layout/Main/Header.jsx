import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Container from "../../components/Container";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Header = () => {
    const axios = useAxios();
    const { user, logOutUser, setIsLoading } = useAuth();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handlelogOutUser = async () => {
        try {
            await logOutUser();
            const logout = await axios.post("/logout");
            if (logout.status === 200) {
                toast.success("LogOut success!");
            }
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            toast.error("LogOut Error!");
        }
    };
    return (
        <header className="py-2">
            <Container>
                <Navbar className="relative" container="true">
                    <Link className="flex items-center" to="/">
                        <img
                            src={logo}
                            className="mr-3 h-6 md:h-9"
                            alt="MyTask Logo"
                        />
                    </Link>
                    <div className="flex md:order-2">
                        {user ? (
                            <Dropdown
                                className="z-50 text-secondary"
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar
                                        alt="User settings"
                                        img={user?.photoURL}
                                        rounded
                                    />
                                }
                            >
                                <Dropdown.Header>
                                    <span className="block text-secondary text-sm">
                                        {user?.displayName}
                                    </span>
                                    <span className="block text-secondary truncate text-sm font-medium">
                                        {user?.email}
                                    </span>
                                </Dropdown.Header>
                                <Link
                                    className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100"
                                    to="/dashboard"
                                >
                                    Dashboard
                                </Link>
                                <Dropdown.Divider />
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handlelogOutUser}>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>
                        ) : (
                            <div className="flex justify-center gap-2">
                                <Link
                                    to="/login"
                                    className="inline-flex text-white bg-primary border-0 py-1.5 px-3 focus:outline-none hover:bg-blue-500 rounded text-md"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="inline-flex text-gray-700 bg-gray-100 border-0 py-1.5 px-3 focus:outline-none hover:bg-gray-200 rounded text-md"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 pr-4 pl-3 md:p-0 bg-primary text-white md:bg-transparent md:text-primary"
                                    : "block py-2 pr-4 pl-3 md:p-0 text-gray-600 md:bg-transparent"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 pr-4 pl-3 md:p-0 bg-primary text-white md:bg-transparent md:text-primary"
                                    : "block py-2 pr-4 pl-3 md:p-0 text-gray-600 md:bg-transparent"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 pr-4 pl-3 md:p-0 bg-primary text-white md:bg-transparent md:text-primary"
                                    : "block py-2 pr-4 pl-3 md:p-0 text-gray-600 md:bg-transparent"
                            }
                        >
                            Contact
                        </NavLink>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
