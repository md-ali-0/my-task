const Features = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10">
                    Features
                </h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                                Organize
                            </h2>
                            <p className="leading-relaxed text-base">
                                The Organize feature is designed to streamline
                                your workflow by providing intuitive task
                                management. It allows users to create,
                                categorize, and prioritize tasks efficiently,
                                ensuring a structured approach to handling
                                various responsibilities.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <circle cx={6} cy={6} r={3} />
                                <circle cx={6} cy={18} r={3} />
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                                Statistic
                            </h2>
                            <p className="leading-relaxed text-base">
                                The Statistic feature compiles and presents
                                insightful data related to task performance,
                                progress, and productivity. It offers visual
                                representations and analytics, empowering users
                                to assess their efficiency and make informed
                                decisions.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                <circle cx={12} cy={7} r={4} />
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                                Secure Cloud
                            </h2>
                            <p className="leading-relaxed text-base">
                                The Secure Cloud feature ensures the safety and
                                confidentiality of user data by employing robust
                                encryption protocols and secure storage
                                infrastructure. It offers a reliable and
                                protected environment for storing sensitive
                                task-related information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
