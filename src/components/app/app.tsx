import React from "react";
import {Route, Routes,} from 'react-router-dom';
import {AppRoute} from "../../const";
import Login from "../../pages/login/login";
import Page404 from "../../pages/page404/page404";
import MainPage from "../../pages/main-page/main-page";
import PrivateRoute from "../private-route/private-route";
import MainNoAuth from "../../pages/main-no-auth/main-no-auth";
import {observer} from "mobx-react-lite";
import browserHistory from "../../browser-history";
import HistoryRouter from "../history-router/history-router";



function App(): React.JSX.Element {
    return (
        <HistoryRouter history={browserHistory}>
        <Routes>
            <Route index path={AppRoute.MainNoAuth} element={<MainNoAuth/>}/>
                <Route path={AppRoute.Login} element={<Login/>}/>
                <Route path={AppRoute.Main} element={<PrivateRoute><MainPage/></PrivateRoute>}/>
            <Route path={'*'} element={<Page404/>}/>
        </Routes>
        </HistoryRouter>
    )
}
export default observer(App)
