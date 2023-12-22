import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 mt-6">
            <div data-aos="zoom-in-up">
                <h1 className="text-5xl font-serif">Visualize any workflow with Board view.</h1>
                <p className="font-serif mt-2">Manage your tasks and projects at a glance with TeamWork flexible Board view. Drag-and-drop tasks, sort, filter, and more with a fully customizable Kanban system.</p>
                <Link to={'/login'}>
                    <button type="button" className="py-2.5 mt-6 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#67deae] rounded-lg border border-gray-200 font-serif ">Lets Explore</button>
                </Link>
            </div>
            <div data-aos="zoom-in-up">
                <img src="https://i.ibb.co/MffpdFF/maximize-efficiency-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;