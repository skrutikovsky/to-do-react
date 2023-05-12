export enum AppRoute {
    MainNoAuth = '/',
    Main = '/main',
    Login = '/login',
}

export enum ServerURLS {
    BACKEND_URL = 'http://localhost:4000',
    ALL = 'http://localhost:4000/all',
    DONE = 'http://localhost:4000/all?isDone=true',
    UNDONE = 'http://localhost:4000/all?isDone=false',
    LOGIN = 'http://localhost:4000/login',
}

export enum AuthStatus {
    UNKNOWN = 'UNKNOWN',
    AUTH = 'AUTH',
    NOAUTH = 'NOAUTH'
}
