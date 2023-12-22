const TargetAudience = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-sm text-indigo-500 tracking-widest font-medium title-font mb-1">
                        Target Audience
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                        Who Can Benefit
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    Developers
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">
                                    Those familiar with programming languages
                                    like Python and JavaScript. Seeking
                                    insights, tools, and resources to enhance
                                    their coding experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    Corporate Professionals
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">
                                    Looking for innovative solutions to
                                    streamline operations. Interested in
                                    technology trends impacting their
                                    industries.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx={6} cy={6} r={3} />
                                        <circle cx={6} cy={18} r={3} />
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    Other Potential Beneficiaries
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">
                                    Exploring tech advancements in financial
                                    systems. Seeking educational resources and
                                    insights into programming languages.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
