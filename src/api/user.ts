import axios, { AxiosError, AxiosResponse } from "../utils/axios";
const baseUrl =
  "https://www.fastmock.site/mock/859d7dac3dffcae51487fb02ad0d2a8a/captern";
interface Params {
  id: number;
}
const getUserInfo = (params: Params) =>
  axios({
    url: baseUrl + "/get",
    method: "get",
    params,
  });
export { getUserInfo };
