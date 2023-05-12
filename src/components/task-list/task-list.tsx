import React from "react";
import {TaskInfo} from "../../types";
import Task from "../task/task";

type TaskListProp = {
    tasks: TaskInfo[];
}

function TaskList({tasks}: TaskListProp): React.JSX.Element {
    return (
        <>
            {tasks.map((task) => <Task key={task.id} id={task.id} taskText={task.taskText} isDone={task.isDone}/>)}
        </>
    )
}
export default TaskList
