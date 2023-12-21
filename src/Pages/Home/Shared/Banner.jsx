import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl font-serif">Visualize any workflow with Board view.</h1>
                <p className="font-serif mt-2">Manage your tasks and projects at a glance with ClickUps flexible Board view. Drag-and-drop tasks, sort, filter, and more with a fully customizable Kanban system.</p>
                <Link to={'/login'}>
                    <button type="button" className="py-2.5 mt-6 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#67deae] rounded-lg border border-gray-200 font-serif ">Lets Explore</button>
                </Link>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Banner;