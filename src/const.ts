export enum AppRoute {
    MainNoAuth = '/',
    Main = '/main',
    Login = '/login',
}

export enum ServerURLS {
    BACKEND_URL = 'https://server-personal-page-2.onrender.com',
    ALL = 'https://server-personal-page-2.onrender.com/tasks',
    DONE = 'https://server-personal-page-2.onrender.com/tasks?isDone=true',
    UNDONE = 'https://server-personal-page-2.onrender.com/tasks?isDone=false',
    LOGIN = 'https://server-personal-page-2.onrender.com/login',
}

export enum AuthStatus {
    UNKNOWN = 'UNKNOWN',
    AUTH = 'AUTH',
    NOAUTH = 'NOAUTH'
}
