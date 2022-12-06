import { API } from "../../utils";
import { ISignin, ISignup} from "../dtos";
import AXIOS from "./axiosClient";

const subdirectory = API.AUTH;

export const signup = async (data: ISignup) => {
  try {
    const res = await AXIOS.post(subdirectory+API.REGISTER, data);
    return res;
  } catch (error) {
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
    });
    return res;
  } catch (error) {
    return error;
  }
};
