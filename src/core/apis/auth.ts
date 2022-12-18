import { API } from "../../utils";
import { ISignin, ISignup} from "../dtos";
import AXIOS from "./axiosClient";

const subdirectory = API.AUTH;

export const signup = async (data: ISignup) => {
  try {
    const res = await AXIOS.post(subdirectory+API.REGISTER, data)
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
};

export const signin = async (data: ISignin) => {
  try {
    return await AXIOS.post(subdirectory + API.LOGIN, data);
  } catch (error) {
    return error;
  }
};

export const getusers = async (token: string) => {
  try {
    const res = await AXIOS.get(subdirectory+API.USERS, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
    .then((response)=>{
      return response
    })
    .catch((error)=>{
      return error.response
    })
    ;
    return res;
  } catch (error) {
    return error;
  }
};
