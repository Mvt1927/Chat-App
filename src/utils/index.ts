// export enum HOST {
//     value = "https://127.0.0.1:3333",
// }
export enum API {
    // HOST = "http://192.168.1.11:3333", 
    HOST = "https://chatapp-server2.herokuapp.com/", 
    // AUTH
    AUTH = "/auth",
    LOGIN = '/signin',
    REGISTER = '/signup',
    USERS = "/getusers",

    // LOGOUT = AUTH + '/logout',
    // Chat
    CHAT = "/chat",
    GET_CHATS = "/getchats"
}
export const ACCESS_TOKEN = "access_token"
export const IS_SOCKET_CONNECTED = "is_socket_connected"
export const SOCKET = "socket"
export enum COLOR{
    BLUE = "rgba(96,165,250,1)"
}
