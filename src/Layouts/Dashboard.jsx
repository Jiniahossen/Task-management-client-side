import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className=" flex flex-col md:flex-row  max-w-full min-h-screen">
                <div className="p-6  w-80 bg-[#67deae]">
                    <h1 className=" mb-10 text-center text-black font-serif font-bold text-2xl">
                        Team Manager <br />
                    </h1>
                    <ul className="menu text-black text-base font-serif gap-4 uppercase" >
                        <li><NavLink to='/dashboard/add-task' className={({ isActive, isPending }) =>
                            isPending ? "px-2 py-1 bg-none rounded-sm text-base text-black font-serif " : isActive ? "px-2 py-1 rounded-sm text-white  text-base font-serif" : ""
                        }>
                            <div className="flex items-center gap-4">
                                <FaPlus className="text-2xl"></FaPlus>
                                <h1 className="text-xl">Add Task</h1>
                            </div>
                        </NavLink>
                        </li>
                        <li className="pt-4"><NavLink to='/dashboard/all-task' className={({ isActive, isPending }) =>
                            isPending ? "px-2 py-1 bg-none  rounded-sm text-lg text-black font-serif " : isActive ? "px-2 rounded-sm py-1 text-white  text-lg font-serif" : ""
                        }>
                            <div className="flex items-center gap-4">
                                <FaListCheck className="text-2xl"></FaListCheck>
                                <h1 className="text-xl">All Task</h1>
                            </div></NavLink>
                        </li>

                    </ul>
                    <hr  />
                    <div className="mt-6">
                        <ul>
                            <li>
                                <NavLink to='/' className={({ isActive, isPending }) =>
                                    isPending ? "px-2 py-1 bg-none rounded-sm text-base text-black font-serif " : isActive ? "px-2 py-1 rounded-sm text-white  text-base font-serif" : ""
                                }>
                                    <div className="flex items-center gap-4">
                                        <FaHome className="text-2xl"></FaHome>
                                        <h1 className="text-xl">Home</h1>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" flex-1 px-8 ">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;