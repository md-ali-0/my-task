import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center py-10">
            <div className="md:w-1/2 space-y-3">
                <h4 className="text-sm text-secondary md:text-xl font-semibold">
                    Welcome to <span className="text-primary">My Task</span>
                </h4>
                <h3 className="text-xl text-secondary md:text-5xl font-bold">
                    Effortless Task Management at Your Fingertips!
                </h3>
                <p className="text-secondary">
                    A sleek and intuitive task management solution designed to
                    simplify your workflow.
                </p>
                <div className="py-2">
                    <Link to="/login" className="btn btn-primary">
                        Let’s Explore
                    </Link>
                </div>
            </div>
            <div>
                <img className="w-[480px]" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;
