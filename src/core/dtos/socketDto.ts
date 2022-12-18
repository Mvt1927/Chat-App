import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface IMessageSend {
    access_token?: string
    to: number,
    msg: string
}

export interface ISocketStore {
    socket: React.MutableRefObject<Socket>|undefined
    createSocket(token:string):Socket
    storeSocket(socket:React.MutableRefObject<Socket>):void
    sendMessage(receiveId:number,msg:string):void
    clear(): void
}