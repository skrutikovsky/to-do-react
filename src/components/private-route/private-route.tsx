import {AppRoute, AuthStatus} from "../../const";
import React from "react";
import {Navigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import store from "../../store/store";

type PrivateRouteProps = {
    children: React.JSX.Element;
}

function PrivateRoute(children:PrivateRouteProps): React.JSX.Element {
    return store.getAuthStatus() === AuthStatus.AUTH
        ?children.children
        :<Navigate to={AppRoute.Login}/>
}
export default observer(PrivateRoute);
