import { Link } from "react-router-dom";
import logo from '../../assets/7537053-removebg-preview.png';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logOut } = useAuth();


    const handleLogOut = () => {
        logOut()
            .then(res => {
                Swal.fire("You have logged out!");
            })
    }
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <div className="self-center flex items-center text-2xl font-semibold whitespace-nowrap dark:text-white text-center md:text-start">
                        <img src={logo} alt="" className=" h-16" />
                    </div>

                    <div className="flex md:order-2 gap-4 items-center font-serif space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div>
                            <ul>
                                <>
                                    {
                                        user ?
                                            <div className="navbar-end flex items-center gap-2">
                                                <li><img src={user.photoURL} className="rounded-full w-8" /></li>
                                                <li><h1>{user.displayName}</h1></li>
                                                <li><button className=" text-[#fe3c13] px-4 font-serif" onClick={handleLogOut}>Logout</button></li>

                                            </div>
                                            :
                                            <div className="navbar-end flex gap-2">

                                                <li>
                                                    <Link to={'/login'}>Login/</Link>
                                                    <Link to={'/signup'}>Signup</Link>
                                                </li>
                                            </div>
                                    }
                                </>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex items-center flex-col font-serif text-lg font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to={'/'}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={'aboutus'}>
                                    About Us
                                </Link>
                            </li>
                            {
                                user ? <li>
                                    <Link to={'/dashboard'}>
                                        Dashboard
                                    </Link>
                                </li> : <></>
                            }
                            <li>
                                <Link to={'/contact'}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;