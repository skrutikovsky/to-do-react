import React from "react";
import {AppRoute, AuthStatus} from "../../const";
import {Link} from "react-router-dom";
import store from "../../store/store";
import {observer} from "mobx-react-lite";

function Logo(): React.JSX.Element {
    return (
        <Link to={store.isAuth === AuthStatus.AUTH?AppRoute.Main:AppRoute.MainNoAuth} className="header-logo">·TO DO LIST·</Link>
    )
}
export default observer(Logo);
