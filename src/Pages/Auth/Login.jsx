import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiErrorCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { createLogin } = useAuth();
    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            const res = await createLogin(email, password);
            if (res?.user?.email) {
                toast.success("Login Successfull");
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex flex-col items-center justify-center px-5 py-5 mx-auto my-10 lg:py-0">
            <div className="w-full bg-white border border-gray-200 rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-5 sm:p-8">
                    <div className="text-center">
                        <h1 className="text-xl font-semibold">Welcome back</h1>
                        <small className="text-gray-400">
                            Welcome back! Please enter your details
                        </small>
                    </div>
                    <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
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
                            {errors.password && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />
                                    {errors.password?.message}
                                </span>
                            )}
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
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Sign In
                        </button>
                    </form>
                    <div>
                        <p className="text-center text-gray-700 text-sm pb-3">
                            Or
                        </p>
                        <div className="space-y-3">
                            <button
                                // onClick={handleGoogleLogin}
                                className="w-full border border-gray-200 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2 text-center flex items-center justify-center gap-2"
                            >
                                {" "}
                                <span className="text-lg ">
                                    <FcGoogle></FcGoogle>
                                </span>{" "}
                                Login With Google
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-center font-light text-gray-500">
                        Don’t have an account yet?{" "}
                        <Link
                            to="/register"
                            className="font-medium text-primaryhover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
