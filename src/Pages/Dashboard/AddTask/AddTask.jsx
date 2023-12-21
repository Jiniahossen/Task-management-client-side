import { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddTask = () => {
    const axiosPublic=useAxiosPublic();
    const {user}=useAuth();
    const email=user?.email;
    const {
        register,
        handleSubmit,
        setValue, // Add this line
    } = useForm();

    const [startDate, setStartDate] = useState(new Date());

    const onSubmit = (data) => {
        // Include the email in the data object
        const formData = {
            ...data,
            email: email,
            list:'todo'
        };
    
        axiosPublic.post('/tasks',formData)
        .then((res)=>{
            console.log(res.data);
           if(res.data.insertedId){
            Swal.fire('Task added successfully!')
           }
        })
    };

    return (
        <div className="p-20">
            <h1 className="text-4xl font-serif uppercase text-center mb-10">
                Add your task
            </h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="title"
                                className="block font-serif mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Title
                            </label>
                            <input
                                {...register("title", { required: true })}
                                type="text"
                                id="title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Title"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block mb-2 font-serif text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your message
                            </label>
                            <textarea
                                {...register("message", { required: true })}
                                id="message"
                                rows="4"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your task description..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="priority"
                                className="block font-serif mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Priority
                            </label>
                            <select
                                {...register("priority", { required: true })}
                                id="priority"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="" disabled>
                                    Select priority
                                </option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="date"
                                className="block font-serif mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Select Time
                            </label>
                            <DatePicker
                                {...register("date", { required: true })}
                                selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date);
                                    setValue("date", date, { shouldValidate: true });
                                }}
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="font-serif mt-10 bg-[#67deae] text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
