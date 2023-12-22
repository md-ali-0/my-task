import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const AllTasks = ({ todo, ongoing, completed, refetch }) => {
    const statues = ["todo", "ongoing", "completed"];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {statues.map((status, idx) => (
                <Section
                    key={idx}
                    status={status}
                    todo={todo}
                    ongoing={ongoing}
                    completed={completed}
                    refetch={refetch}
                />
            ))}
        </div>
    );
};

export default AllTasks;

const Section = ({ status, todo, ongoing, completed, refetch }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    let text = "Todo";
    let bg = "bg-slate-800";
    let color = "text-slate-800";
    let taskToMap = todo;

    if (status === "ongoing") {
        text = "Ongoing";
        color = "text-blue-700";
        bg = "bg-blue-700";
        taskToMap = ongoing;
    }
    if (status === "completed") {
        text = "Completed";
        bg = "bg-green-600";
        color = "text-green-700";
        taskToMap = completed;
    }
    const axios = useAxios();
    const addItemToSection = async(item)=>{
        try {
            await axios.put(`/update-task/${item.id}`,{'status':status})
            toast.success(`Task ${status}`)
            refetch()
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete = async (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.delete(`/delete-task/${id}`);
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                }
            });
        } catch (error) {
            console.log(error);
            toast.error("Task Can't Delete");
        }
    };
    return (
        <div ref={drop} className={`${isOver?'bg-slate-200 rounded-md':''}`}>
            <Header
                text={text}
                bg={bg}
                color={color}
                count={taskToMap.length}
            />
            <div className="flex flex-col">
                {taskToMap.map((task) => (
                    <TaskItem
                        key={task._id}
                        task={task}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

const Header = ({ text, bg, color, count }) => {
    return (
        <>
            <div
                className={`${bg} flex justify-between items-center rounded-lg py-1.5 px-2.5`}
            >
                <h3 className="text-white text-md">{text} List</h3>
                <span
                    className={`${color} bg-white rounded-full w-5 h-5 text-sm text-center`}
                >
                    {count}
                </span>
            </div>
        </>
    );
};

const TaskItem = ({ task, handleDelete }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div
            ref={drag}
            className={`flex justify-between ${
                isDragging ? "opacity-50" : "opacity-100"
            } items-center cursor-move border border-gray-300 rounded-lg my-1`}
        >
            <div className={`flex flex-col py-1.5 px-2.5`}>
                <h3 className="block text-secondary text-md">{task.title}</h3>
                <p>{task.description.split(" ").slice(0, 8).join(" ")}</p>
            </div>
            <div className="w-10">
                <TiDelete
                    color="#9A0000"
                    className="cursor-pointer"
                    size={25}
                    onClick={() => handleDelete(task._id)}
                />
            </div>
        </div>
    );
};
