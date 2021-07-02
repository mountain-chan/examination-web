import axios from "axios";
import { app } from "./config";

const getApi = (api: string) => axios.get(api, { timeout: app.timeout });
const postApi = (api: string, data?: object) => axios.post(api, data, { timeout: app.timeout });
const putApi = (api: string, data?: object) => axios.put(api, data, { timeout: app.timeout });
const deleteApi = (api: string) => axios.delete(api, { timeout: app.timeout });

const mapApi = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
};

export const callApi = async (payload: { method: "get" | "post" | "put" | "delete"; api: string; body?: object }) => {
  let result = {
    code: 500,
    status: false,
    data: null,
  };
  const { method, api, body } = payload;
  try {
    const response = await mapApi[method](api, body);
    const data = response.data;
    result = {
      code: data.code,
      status: data.status,
      data: data.data,
    };
  } catch (error) {}
  return result;
};
