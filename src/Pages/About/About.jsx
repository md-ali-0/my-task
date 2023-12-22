import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="px-3 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-transparent">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between -mx-4">
                    <div className="w-full px-4 md:w-1/2">
                        <div className="flex items-center -mx-3 sm:-mx-4">
                            <div className="w-full px-3 sm:px-4 xl:w-3/2">
                                <div className="relative z-10 my-4">
                                    <img
                                        src="https://i.ibb.co/37CCqxH/about.jpg"
                                        alt=""
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div className="mt-10 lg:mt-0">
                            <span className="block mb-4 text-lg font-semibold text-primary">
                                Why My Task Stands Out
                            </span>
                            <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                Welcome to MyTask, your ultimate task management
                                solution designed to empower individuals and
                                teams in achieving productivity and efficiency.
                            </p>
                            <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                At MyTask, our mission is to simplify task
                                management and enhance productivity for
                                everyone, from developers and business
                                professionals to students and educators. We
                                believe that organizing tasks shouldn't be a
                                hassle but a seamless and empowering experience.
                            </p>
                            <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                MyTask offers an intuitive and user-friendly
                                interface that enables you to organize tasks
                                effortlessly. From creating and prioritizing
                                tasks to tracking progress, our platform
                                streamlines your workflow.
                            </p>

                            <Link
                                to="/"
                                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
