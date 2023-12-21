import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center px-5 py-5 mx-auto my-10 lg:py-0">
            <div className="w-full bg-white border border-gray-200 rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-5 sm:p-8">
                    <div className="text-center">
                        <h1 class="text-xl font-semibold">Welcome back</h1>
                        <small class="text-gray-400">
                            Welcome back! Please enter your details
                        </small>
                    </div>
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-input"
                                placeholder="Enter Email Address"
                                required
                            />
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
                                name="password"
                                id="password"
                                className="form-input"
                                required
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
