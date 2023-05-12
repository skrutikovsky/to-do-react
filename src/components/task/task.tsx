import React from "react";
import {TaskInfo} from "../../types";
import {observer} from "mobx-react-lite";
import store from "../../store/store";

function Task({id, taskText, isDone}: TaskInfo): React.JSX.Element {
    const deleteClickHandler = ()=>{store.removeTask(id); store.getTasks()}
    const doneClickHandler = () => {store.toggleTaskIsDone(
        {
            id: id,
            taskText: taskText,
            isDone: isDone,
        }
    )}
    return (
        <li className={isDone?"task-done":"task"}>
            <div onClick={doneClickHandler} className="custom-check-box">
                <div className={`custom-check-box-input${isDone?'-active':''}`}/>
            </div>
                <span>{taskText}</span>
                <div onClick={deleteClickHandler} className="close-button"/>
        </li>
    )
}
export default observer(Task)

