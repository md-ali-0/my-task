import { Sidebar } from "flowbite-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DashboardSidebar = ({ openSide }) => {
    return (
        <Sidebar
            id="logo-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform ${
                openSide ? "transform-none" : "-translate-x-full"
            } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
            aria-label="Sidebar with multi-level dropdown example"
        >
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <li className="">
                        <Link
                            to=""
                            aria-labelledby="flowbite-sidebar-item-:r53:"
                            className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                data-testid="flowbite-sidebar-collapse-icon"
                                className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                            </svg>

                            <span
                                data-testid="flowbite-sidebar-item-content"
                                id="flowbite-sidebar-item-:r53:"
                                className="px-3 flex-1 whitespace-nowrap"
                            >
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            to="add-task"
                            aria-labelledby="flowbite-sidebar-item-:r53:"
                            className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm4-4h-2v2h-2V7h-2V5h2V3h2v2h2v2z"></path>
                            </svg>
                            <span
                                data-testid="flowbite-sidebar-item-content"
                                id="flowbite-sidebar-item-:r53:"
                                className="px-3 flex-1 whitespace-nowrap"
                            >
                                Add Task
                            </span>
                        </Link>
                    </li>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
DashboardSidebar.propTypes = {
    setOpenSide: PropTypes.func,
    openSide: PropTypes.bool,
};
export default DashboardSidebar;
