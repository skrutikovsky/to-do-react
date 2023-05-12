import React from "react";
import {useNavigate} from "react-router-dom";
import {AppRoute} from "../../const";
import Logo from "../../components/logo/logo";

function MainNoAuth(): React.JSX.Element {
    const navigate = useNavigate();
    return (<>
        <div className="page-header">
            <button className="header-button visually-hidden">+TASK</button>
            <Logo/>
            <button className="header-button visually-hidden">LOGIN</button>
        </div>
        <img src="polygon.png" alt="poly-bar" className="page-img"/>
        <div className="register-label">
            You must register or log in to use the app!
            <div onClick={()=>navigate(AppRoute.Login)} className="header-button">REGISTER</div>
        </div>
    </>)
}
export default MainNoAuth
