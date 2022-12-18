export interface IChat {
    id?: number,
    msg?: string,
    from?: number,
    to?: number,
    createdAt?: string
}
export interface IChatStore {
    chats: IChat[] | [],
    fetchChats(token: string, contactId: number): void,
    clear(): void,
    addChats(message: IChat): void
}
export interface IReturnChat extends IReturnChat_Departed {}

export interface IReturnChat_Departed {
    status?: boolean,
    chats?: IChat[]|[],
    statusCode?: number,
    message?: string[]|string,
    error?: string
}