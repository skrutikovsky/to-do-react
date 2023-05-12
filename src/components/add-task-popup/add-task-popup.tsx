import React, {useState} from "react";
import store from "../../store/store";
import {ServerURLS} from "../../const";
import {observer} from "mobx-react-lite";

function AddTaskPopup(): React.JSX.Element {
    const [text, setText] = useState('');
    const closeClickHandler = () => {store.popupClose()}
    return (
        <form className="add-task-popup" action="#">
            <div onClick={closeClickHandler} className="popup-close"/>
            <textarea maxLength={15} onChange={(evt)=>{setText(evt.currentTarget.value)}} className="task-input" id="login" name="rating" placeholder="Enter task!"/>
            <div className="letters-counter">{text.length}/15</div>
            <button onClick={(evt)=>{
                evt.preventDefault();
                store.changeFilter(ServerURLS.ALL);
                store.postTask(text);
                store.popupClose();
            }} className="add-task-button" type="submit">ADD TASK</button>
        </form>
    )
}
export default observer(AddTaskPopup)
