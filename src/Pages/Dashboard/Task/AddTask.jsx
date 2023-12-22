import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { BiErrorCircle } from 'react-icons/bi';
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const AddTask = () => {
    const {user} = useAuth()
    const axios = useAxios();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);;
        const  loadingToast = toast.loading('Creating Task ... !!');
        try {

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
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                        <div className="md:col-span-3">
                            <div className="space-y-2 py-2">
                                <label
                                    htmlFor="title"
                                    className="text-sm font-medium">
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    {...register('title', {
                                        required: 'Title is required.',
                                    })}
                                    placeholder="Enter Post Title"
                                    className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-0 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
                                />
                                {errors.title && (
                                    <span className="text-center text-red-500 flex items-center gap-1">
                                        <BiErrorCircle
                                            className="inline-block ml-2"
                                            size={15}
                                        />{' '}
                                        {errors.title?.message}
                                    </span>
                                )}
                            </div>
                            <div className="space-y-2 py-2">
                                <label
                                    htmlFor="title"
                                    className="text-sm font-medium">
                                    Short Description:
                                </label>
                                <textarea
                                    {...register('shortDescription', {
                                        required: 'Title is required.',
                                        maxLength: {
                                            value:250,
                                            message: 'Short Desciption Must be Under 250 characters'
                                        }
                                    })}
                                    className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-0 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
                                    rows="3"
                                    placeholder="Enter Short Description"></textarea>
                                {errors.shortDescription && (
                                    <span className="text-center text-red-500 flex items-center gap-1">
                                        <BiErrorCircle
                                            className="inline-block ml-2"
                                            size={15}
                                        />{' '}
                                        {errors.shortDescription?.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="title" className="text-sm font-medium">
                            Long Description:
                        </label>
                        <textarea
                            {...register('longDescription', {
                                required: 'Title is required.',
                            })}
                            className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-0 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
                            rows="3"
                            placeholder="Enter Long Description"></textarea>
                        {errors.longDescription && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle
                                    className="inline-block ml-2"
                                    size={15}
                                />{' '}
                                {errors.longDescription?.message}
                            </span>
                        )}
                    </div>
                    <div className="py-2">
                        <button
                            type="submit"
                            className="w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
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
                                className="feather feather-plus">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span>Add Post</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;