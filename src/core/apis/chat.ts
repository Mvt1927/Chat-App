import { API } from "../../utils";
import AXIOS from "./axiosClient";

const subdirectory = API.CHAT

export const getchats =async (token:string,contactId:number) => {
    try {
        const res = await AXIOS.post(subdirectory+API.GET_CHATS, {receiverId:contactId},
          {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          }  
        )
        .then((response)=>{
          return response
        })
        .catch((error)=>{
          return error.response
        })
        return res;
      } catch (error) {
        // console.log(error)
        return error;
      }
}