import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {AppRoute, ServerURLS} from "../../const";
import AddTaskPopup from "../../components/add-task-popup/add-task-popup";
import {observer} from "mobx-react-lite";
import TaskList from "../../components/task-list/task-list";
import store from "../../store/store";
import Logo from "../../components/logo/logo";

function MainPage(): React.JSX.Element {
    const navigate = useNavigate();
    const taskClickHandler = () => store.popupOpen();
    useEffect(()=>{store.getTasks()},[store.openedFilter])
    return (<>
        <div className="page-header">
            <button onClick={taskClickHandler} className="header-button">+TASK</button>
            <Logo/>
            <button className="header-button" onClick={()=>{navigate(AppRoute.Login); store.logout()}}>LOG OUT</button>
        </div>
        <img src="polygon.png" alt="poly-bar" className="page-img"/>
        <div className="page-filters">
            <button onClick={()=>{store.changeFilter(ServerURLS.ALL)}} className={`task-filter${store.openedFilter === ServerURLS.ALL?'-active':''}`}>ALL TASKS</button>
            <button onClick={()=>{store.changeFilter(ServerURLS.UNDONE)}} className={`task-filter${store.openedFilter === ServerURLS.UNDONE?'-active':''}`}>TO DO</button>
            <button onClick={()=>{store.changeFilter(ServerURLS.DONE)}} className={`task-filter${store.openedFilter === ServerURLS.DONE?'-active':''}`}>DONE</button>
        </div>
        {store.isPopupOpened && <AddTaskPopup/>}
        <ul className="task-list">
            <TaskList tasks={store.tasks}/>
        </ul>
    </>)
}
export default observer(MainPage)
