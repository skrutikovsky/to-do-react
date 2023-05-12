import React, {useState} from "react";
import {AppRoute} from "../../const";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import store from "../../store/store";
import Logo from "../../components/logo/logo";

function Login(): React.JSX.Element {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (<>
        <div className="page-header">
            <button className="header-button visually-hidden">+TASK</button>
            <Logo/>
            <button className="header-button visually-hidden">LOGIN</button>
        </div>
        <img src="polygon.png" alt="poly-bar" className="page-img"/>

        <form action="#" className="login-form">
            <label className="login-label" htmlFor="login">Login</label>
            <input onChange={(evt)=>setLogin(evt.currentTarget.value)} className="login-input" id="login" type="text"/>
            <label className="login-label" htmlFor="password">Password</label>
            <input onChange={(evt)=>setPassword(evt.currentTarget.value)} className="login-input" id="password" type="password"/>
            <button onClick={(evt) => {
                evt.preventDefault();
                store.login({login: login, password: password});
                navigate((AppRoute.Main))
            }} type="submit" className="header-button">LOG IN</button>
        </form></>)
}
export default observer(Login)
