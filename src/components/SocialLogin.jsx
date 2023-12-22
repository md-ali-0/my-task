import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    const { googleLogin } = useAuth();
    const handleGoogleLogin = async () => {
        await googleLogin();
        toast.success("Successfully Logged In!");
        return navigate(from, { replace: true });
    };
    return (
        <div className="space-y-3">
            <button
                onClick={handleGoogleLogin}
                className="w-full border border-gray-200 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2 text-center flex items-center justify-center gap-2"
            >
                {" "}
                <span className="text-lg ">
                    <FcGoogle></FcGoogle>
                </span>{" "}
                Login With Google
            </button>
        </div>
    );
};

export default SocialLogin;
