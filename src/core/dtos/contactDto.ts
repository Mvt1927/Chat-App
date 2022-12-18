import { IReturnUser } from "./authDto"
import { IChat } from "./chatDto"

export interface IContactStore {
    contacts: IContact[],
    contactsSelected: IContact | undefined
    fetchContacts(token: string): void
    select(contact: IContact): void
    clear(): void
    clearSelected(): void
}
export interface IReturnContacts_Departed {
    status?: boolean,
    users?: IReturnContacts_User[] | []
}
export interface IReturnContacts extends IReturnContacts_Departed {
    statusCode?: number,
    message?: string
    // users?: IReturnContacts_User[] | []
}

export interface IContact extends IReturnContacts_User { }

export interface IReturnContacts_User extends IReturnUser {
    chat: IChat[] | []
}