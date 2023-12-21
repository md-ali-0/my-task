import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiErrorCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import uploadImage from "../../Utils/useImageUpload";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const { createUser, updateUserProfile, googleLogin, logOutUser } = useAuth();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const loadingToast = toast.loading("Creating Account ... !!");
        const { name, picture, email, password } = data;
        const response = await createUser(email, password);
        try {
            if (response?.user?.email) {
                const imageResult = await uploadImage(picture[0]);
                console.log(picture[0]);
                if (imageResult) {
                    await updateUserProfile(name, imageResult);
                    toast.dismiss(loadingToast);
                    toast.success("Successfully created!");
                    await logOutUser();
                    navigate("/login");
                }
            }
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast);
            toast.success(error.code);
        }
    };
    const handleGoogleLogin = async () => {
        const res = await googleLogin();
        console.log(res.user);
    };
    return (
        <div className="flex flex-col items-center justify-center px-5 py-5 mx-auto my-10 lg:py-0">
            <div className="w-full bg-white border border-gray-200 rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-5 sm:p-8">
                    <div className="text-center">
                        <h1 className="text-xl font-semibold">
                            Join Us Today!
                        </h1>
                        <small className="text-gray-400">
                            Welcome! Begin your journey with us.
                        </small>
                    </div>
                    <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Name is Required",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Name should be at least 5 characters.",
                                    },
                                    maxLength: {
                                        value: 15,
                                        message:
                                            "Name should not exceed 15 characters.",
                                    },
                                })}
                                id="name"
                                className="form-input"
                                placeholder="Enter Full Name"
                            />
                            {errors.name && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />
                                    {errors.name?.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="file"
                                id="picture"
                                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                                {...register("picture", {
                                    required: "Profile Picture is required.",
                                    validate: (value) => {
                                        const acceptFormat = [
                                            "png",
                                            "jpg",
                                            "jpeg",
                                        ];
                                        const fileExtension = value[0]?.name
                                            .split(".")
                                            .pop()
                                            .toLowerCase();
                                        if (
                                            !acceptFormat.includes(
                                                fileExtension
                                            )
                                        ) {
                                            return "Invalid file. Select .png, .jpg, .jpeg only.";
                                        }
                                        return true;
                                    },
                                })}
                            />
                            {errors.picture && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />{" "}
                                    {errors.picture?.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="Enter Email Address"
                                {...register("email", {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Invalid email format.",
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />{" "}
                                    {errors.email?.message}
                                </span>
                            )}
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Password
                            </label>
                            <input
                                type={showPass ? "text" : "password"}
                                id="password"
                                className="form-input"
                                {...register("password", {
                                    required: "Password is required.",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be at least 6 characters long.",
                                    },
                                    pattern: {
                                        value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
                                        message:
                                            "Invalid password: no capitals, specials or numbers.",
                                    },
                                })}
                            />
                            <span
                                onClick={() => {
                                    !setShowPass(!showPass);
                                }}
                                className="absolute right-3 top-10 text-gray-700 text-md cursor-pointer"
                            >
                                {showPass ? (
                                    <FiEyeOff></FiEyeOff>
                                ) : (
                                    <FiEye></FiEye>
                                )}
                            </span>
                            {errors.password && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />
                                    {errors.password?.message}
                                </span>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div>
                        <p className="text-center text-gray-700 text-sm pb-3">
                            Or
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={handleGoogleLogin}
                                className="w-full border border-gray-200 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2 text-center flex items-center justify-center gap-2"
                            >
                                {" "}
                                <span className="text-lg ">
                                    <FcGoogle></FcGoogle>
                                </span>{" "}
                                Sign Up With Google
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-center font-light text-gray-500">
                        Already Have an Account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-primaryhover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
