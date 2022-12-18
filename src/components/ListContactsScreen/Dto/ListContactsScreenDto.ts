import { IChat } from "../../../core/dtos/chatDto"
import { IContact } from "../../../core/dtos/contactDto"

export interface UserContactCard extends IContact{
    srcAvatar?:string
}