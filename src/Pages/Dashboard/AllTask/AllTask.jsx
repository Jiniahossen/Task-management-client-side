import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const AllTask = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completedtask, setComplete] = useState([]);
    const {
        // eslint-disable-next-line no-unused-vars
        data: initialTasks = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["tasks", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks/${user?.email}`);
            const toDoTasks = res.data.filter((task) => task.list === "todo");
            setTasks(toDoTasks);
            const ongoingtasks = res.data.filter((task) => task.list === "ongoing");
            setOngoing(ongoingtasks);
            const completetask = res.data.filter(
                (task) => task.list === "completed"
            );
            setComplete(completetask);
            return res.data;
        },
    });


    //date formate 
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleDragEnd = async (result) => {
        if (!result.destination) return;

        const destinationIndex = result.destination.index;
        const draggableId = result.draggableId;

        const destinationDroppableId = result.destination.droppableId;
        let updatedStatus;
        if (destinationDroppableId === "todo") {
            updatedStatus = "todo";
        } else if (destinationDroppableId === "ongoing") {
            updatedStatus = "ongoing";
        } else if (destinationDroppableId === "completed") {
            updatedStatus = "completed";
        } else {
            updatedStatus = "todo";
        }

        try {
            const updatedTasks = tasks.filter((task) => task._id !== draggableId);
            const draggedTask = tasks.find((task) => task._id === draggableId);

            if (draggedTask) {
                draggedTask.status = updatedStatus;
                updatedTasks.splice(destinationIndex, 0, draggedTask);
            }

            setTasks(updatedTasks);

            await axiosPublic.patch(`/tasks/${draggableId}`, {
                list: updatedStatus,
            });

            // Additionally, update the state for completed tasks
            if (updatedStatus === "completed") {
                const updatedCompletedTasks = completedtask.filter(
                    (task) => task._id !== draggableId
                );
                updatedCompletedTasks.push(draggedTask);
                setComplete(updatedCompletedTasks);
            }

            refetch();
        } catch (error) {
            console.error("Error updating task status:", error);
            setTasks(tasks);
        }
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

    // if (isLoading) {
    //     return 
    //     ;
    // }

    

    return (
        <div className="pb-10">
            {" "}
            <div>
                <h1 className="my-6 font-serif text-3xl text-center border-b-2">All Tasks</h1>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
                    <Droppable droppableId="todo">
                        {(provided) => (
                            <div
                                className=" rounded-md p-5"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h2 className="text-center font-serif text-2xl font-bold pb-5">
                                    To-do List
                                </h2>
                                <div className="space-y-3">
                                    {tasks.map((task, index) => (
                                        <Draggable
                                            key={task?._id}
                                            draggableId={task?._id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="shadow-md  capitalize space-y-2 p-4 rounded"
                                                >
                                                   <h1 className="text-lg font-serif mt-2 font-bold">{task?.title}</h1>
                                                    <p className="text-sm font-serif">{task?.message}</p>
                                                    <div className="flex gap-4">
                                                        <h1 className="text-base font-serif bg-[#67deae] w-20 text-center px-2 rounded-md mt-2 text-white">
                                                            {task?.priority}
                                                        </h1>
                                                        <h1 className="text-base font-serif bg-red-600 text-center px-2 rounded-md mt-2 text-white">
                                                            {formatDate(task?.date)}
                                                        </h1>
                                                    </div>
                                                    <div className="flex justify-between text-xl items-center mt-4">
                                                        <MdDeleteOutline onClick={() => handleDelete(task._id)} className="text-2xl text-red-600 cursor-pointer"></MdDeleteOutline>
                                                        <FaRegEdit className="text-green-500 cursor-pointer"></FaRegEdit>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="ongoing">
                        {(provided) => (
                            <div
                                className=" rounded-md p-5"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h2 className="text-center font-serif text-2xl font-bold pb-5">
                                    Ongoing List
                                </h2>
                                <div className="space-y-3">
                                    {ongoing.map((task, index) => (
                                        <Draggable
                                            key={task?._id}
                                            draggableId={task._id} // Ensure a string is used as draggableId
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided?.innerRef}
                                                    {...provided?.draggableProps}
                                                    {...provided?.dragHandleProps}
                                                    className="shadow-md capitalize space-y-2 p-4 rounded"
                                                >
                                                   <h1 className="text-lg font-serif mt-2 font-bold">{task?.title}</h1>
                                                    <p className="text-sm font-serif">{task?.message}</p>
                                                    <div className="flex gap-4">
                                                        <h1 className="text-base font-serif bg-[#67deae] w-20 text-center px-2 rounded-md mt-2 text-white">
                                                            {task?.priority}
                                                        </h1>
                                                        <h1 className="text-base font-serif bg-red-600 text-center px-2 rounded-md mt-2 text-white">
                                                            {formatDate(task?.date)}
                                                        </h1>
                                                    </div>
                                                    <div className="flex justify-between text-xl items-center mt-4">
                                                        <MdDeleteOutline onClick={() => handleDelete(task._id)} className="text-2xl text-red-600 cursor-pointer"></MdDeleteOutline>
                                                        <FaRegEdit className="text-green-500 cursor-pointer"></FaRegEdit>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                    {/* For Completed */}


                    <Droppable droppableId="completed">
                        {(provided) => (
                            <div
                                className=" rounded-md p-5"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h2 className="text-center font-serif text-2xl font-bold pb-5">
                                    Completed
                                </h2>
                                <div className="space-y-3">
                                    {completedtask?.map((task, index) => (
                                        <Draggable
                                            key={task?._id}
                                            draggableId={task?._id} // Ensure a string is used as draggableId
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className=" font-serif shadow-md capitalize space-y-2 p-4 rounded"
                                                >
                                                    <h1 className="text-lg font-serif mt-2 font-bold">{task?.title}</h1>
                                                    <p className="text-sm font-serif">{task?.message}</p>
                                                    <div className="flex gap-4">
                                                        <h1 className="text-base font-serif bg-[#67deae] w-20 text-center px-2 rounded-md mt-2 text-white">
                                                            {task?.priority}
                                                        </h1>
                                                        <h1 className="text-base font-serif bg-red-600 text-center px-2 rounded-md mt-2 text-white">
                                                            {formatDate(task?.date)}
                                                        </h1>
                                                    </div>
                                                    <div className="flex justify-between text-xl items-center mt-4">
                                                        <MdDeleteOutline onClick={() => handleDelete(task._id)} className="text-2xl text-red-600 cursor-pointer"></MdDeleteOutline>
                                                        <FaRegEdit className="text-green-500 cursor-pointer"></FaRegEdit>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </div>
    );
};

export default AllTask;
