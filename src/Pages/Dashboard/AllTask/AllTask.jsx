import useTask from "../../../hooks/useTask";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AllTask = () => {
    const [task, refetch] = useTask();
    const axiosPublic = useAxiosPublic();

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed === true) {
                axiosPublic.delete(`/tasks/${id}`)
                .then((res) => {
                    if (res.data.success) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Task has been deleted.",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: "Unable to delete the task.",
                            icon: "error"
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error deleting task:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Unable to delete the task. Please try again later.",
                        icon: "error"
                    });
                });            

            }
        });
    }
    return (
        <div>
            <div className="flex gap-10 p-10">
                <div className="flex-1">
                    <h1 className="text-xl font-serif text-center mb-6">To do list:</h1>
                    <div className="grid grid-cols-1 gap-6">
                        {task?.map((tasks) => (
                            <div key={tasks._id} className="shadow-md px-4 py-4 rounded-md">
                                <h1 className="text-lg font-serif mt-2">{tasks.title}</h1>
                                <p className="text-sm font-serif">{tasks.message}</p>
                                <div className="flex gap-4">
                                    <h1 className="text-base font-serif bg-[#67deae] w-20 text-center px-2 rounded-md mt-2 text-white">
                                        {tasks.priority}
                                    </h1>
                                    <h1 className="text-base font-serif bg-red-600 text-center px-2 rounded-md mt-2 text-white">
                                        {formatDate(tasks.date)}
                                    </h1>
                                </div>
                                <div className="flex justify-between text-xl items-center mt-4">
                                    <MdDeleteOutline onClick={() => handleDelete(tasks._id)} className="text-2xl text-red-600 cursor-pointer"></MdDeleteOutline>
                                    <FaRegEdit className="text-green-500 cursor-pointer"></FaRegEdit>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 ">
                    <h1 className="text-xl text-center font-serif mb-6">Ongoing:</h1>
                </div>
                <div className="flex-1">
                    <h1 className="text-xl  text-center font-serif mb-6">Completed:</h1>
                </div>
            </div>
        </div>
    );
};

export default AllTask;
