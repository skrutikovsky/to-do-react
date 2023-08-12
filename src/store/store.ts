import {makeAutoObservable, runInAction} from "mobx";
import {AuthInfo, TaskInfo} from "../types";
import {AppRoute, AuthStatus, ServerURLS} from "../const";
import React from "react";
import browserHistory from "../browser-history";

// const todoStore = () => {
//     return makeAutoObservable({
//         toDoList: [] as TaskInfo[],
//         doneTasks: [] as TaskInfo[],
//         undoneTasks: [] as TaskInfo[],
//         popupIsOpened: false,
//         idCounter: 0,
//     });
// };
//
// export default todoStore;




class Store {
    public isAuth: AuthStatus = AuthStatus.UNKNOWN;
    public tasks: TaskInfo[] = [];
    public isPopupOpened: boolean = false;
    public openedFilter: ServerURLS = ServerURLS.ALL

    constructor(){
        makeAutoObservable(this);
    }
    public popupOpen(): void{
        this.isPopupOpened = true;
    }
    public popupClose(): void{
        this.isPopupOpened = false;
    }
    public getAuthStatus(): AuthStatus {
        return this.isAuth
    }
    public login(authInfo: AuthInfo): void{
        fetch(ServerURLS.LOGIN, {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                login: authInfo.login,
                password: authInfo.password,
            })})
            .then(()=>(this.isAuth = AuthStatus.AUTH))
            .then(()=>{browserHistory.push(AppRoute.Main)}).catch(()=>alert("Неверный логин или пароль!"))
    }
    public logout(): void {
        this.isAuth = AuthStatus.NOAUTH;
    }
    public changeFilter(newFilter: ServerURLS): void {
        this.openedFilter = newFilter;
    }
    public getTasks(): void {
        fetch(this.openedFilter).then(response => response.json())
            .then((res: TaskInfo[]) =>{
                runInAction(()=> {
                    this.tasks = res
                })
            });

    }

    public postTask(text: string, isDone = false): void{
        fetch(ServerURLS.ALL, {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: '',
                taskText: text,
                isDone: isDone,
            })
        }).then(()=>{this.getTasks()});

    }
    public removeTask(id: string): void{
        fetch(`${ServerURLS.ALL}/${id}`, {method: 'DELETE'}).then(()=>{this.getTasks()});
    }

    public toggleTaskIsDone(data: TaskInfo): void{
        fetch(`${ServerURLS.ALL}/${data.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(()=>{this.getTasks()});
    }
}

const store = new Store();

export default store;
