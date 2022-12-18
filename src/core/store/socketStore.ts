import create from "zustand";
import { ISocketStore } from "../dtos/socketDto";
import { io } from "socket.io-client";
import { API } from "../../utils";
export const useSocketStore = create<ISocketStore>()(
    (set, get) => ({
            socket: undefined,
            createSocket(token) {
                return io(API.HOST, {
                    extraHeaders: {
                        access_token: token,
                    }
                });
            },
            storeSocket(socket) {
                set({
                    socket: socket
                })
            },
            sendMessage(receiveId, msg) {
                if (get().socket.current) {
                    get().socket.current.emit("sendMessage", {
                        to: receiveId,
                        msg: msg
                    })
                }
            },
            clear() {
                set({
                    socket: undefined
                })
            },
        }),
);
