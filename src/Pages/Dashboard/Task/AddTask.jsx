import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiErrorCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const AddTask = () => {
    const { user } = useAuth();
    const axios = useAxios();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        const newTask = { ...data, status: "todo", createdBy: user?.email };
        const loadingToast = toast.loading("Creating Task ... !!");
        try {
            const { data } = await axios.post("/add-task", newTask);
            if (data?.acknowledged) {
                toast.dismiss(loadingToast);
                toast.success("Task Successfully Added");
                navigate('/dashboard')
            }
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error(error);
            console.log(error);
        }
    };
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-5 flex flex-col md:flex-row gap-2 mt-16">
                <form
                    className="border-gray-200 p-5 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
                        <div className="md:col-span-4">
                            <div className="space-y-2 py-2">
                                <label
                                    htmlFor="title"
                                    className="text-sm font-medium"
                                >
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    {...register("title", {
                                        required: "Title is required.",
                                    })}
                                    placeholder="Enter Task Title"
                                    className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-0 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
                                />
                                {errors.title && (
                                    <span className="text-center text-red-500 flex items-center gap-1">
                                        <BiErrorCircle
                                            className="inline-block ml-2"
                                            size={15}
                                        />{" "}
                                        {errors.title?.message}
                                    </span>
                                )}
                            </div>
                            <div className="space-y-2 py-2">
                                <label
                                    htmlFor="description"
                                    className="text-sm font-medium"
                                >
                                    Description:
                                </label>
                                <textarea
                                    {...register("description", {
                                        required: "Description is required.",
                                        maxLength: {
                                            value: 250,
                                            message:
                                                "Desciption Must be Under 250 characters",
                                        },
                                    })}
                                    className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-0 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
                                    rows="3"
                                    placeholder="Enter Description"
                                ></textarea>
                                {errors.description && (
                                    <span className="text-center text-red-500 flex items-center gap-1">
                                        <BiErrorCircle
                                            className="inline-block ml-2"
                                            size={15}
                                        />{" "}
                                        {errors.description?.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <div className="space-y-2 py-2">
                                <label
                                    htmlFor="deadlines"
                                    className="text-sm font-medium"
                                >
                                    Deadlines:
                                </label>
                                <input
                                    type="date"
                                    {...register("deadlines", {
                                        required: "Deadlines is required.",
                                    })}
                                    placeholder="Enter Task Deadlines"
                                    className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-0 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
                                />
                                {errors.deadlines && (
                                    <span className="text-center text-red-500 flex items-center gap-1">
                                        <BiErrorCircle
                                            className="inline-block ml-2"
                                            size={15}
                                        />{" "}
                                        {errors.deadlines?.message}
                                    </span>
                                )}
                            </div>
                            <div className="space-y-2 py-2">
                                <label
                                    htmlFor="title"
                                    className="text-sm font-medium"
                                >
                                    Priority:
                                </label>
                                <select
                                    name="priority"
                                    id="priority"
                                    {...register("priority", {
                                        required: "Priority is required.",
                                    })}
                                    className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-0 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
                                >
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>
                                {errors.priority && (
                                    <span className="text-center text-red-500 flex items-center gap-1">
                                        <BiErrorCircle
                                            className="inline-block ml-2"
                                            size={15}
                                        />{" "}
                                        {errors.priority?.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <button
                            type="submit"
                            className="w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                            >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span>Add Task</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
