import React from "react";

export function MainPage(): React.JSX.Element {
    return (
        <>
        <div className="page-header">
            <button className="header-button">+TASK</button>
            <div className="header-logo">TO DO LIST</div>
            <button className="header-button">LOGIN</button>
        </div>
        <img src="polygon.png" alt="poly-bar" className="page-img"/>
        <div className="page-filters">
            <button className="task-filter-active">ALL TASKS</button>
            <button className="task-filter">TO DO</button>
            <button className="task-filter">DONE</button>
        </div>
        <ul className="task-list">
            <li className="task">
                <input type="checkbox" checked/>
                    <span>TASK NAME</span>
                    <div className="close-button"/>
            </li>
            <li className="task-active">
                <input type="checkbox"/>
                    <span>TASK NAME</span>
                    <div className="close-button"/>
            </li>
        </ul>
    </>)
}
