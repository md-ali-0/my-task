import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
// ..
AOS.init();

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
            <div data-aos="fade-zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <img className="w-[480px]" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;
