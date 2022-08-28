import axios, { AxiosRequestConfig } from "axios";

interface fetchDataConfigType {
  method?: string;
  headers?: Record<string, string>;
  url?: string | undefined;
  body?: any;
}

// export interface AxiosResponse<T = never>  {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: Record<string, string>;
//   config: AxiosRequestConfig<T>;
//   request?: any;
// }

export const fetchData = async (config: fetchDataConfigType) => {
  const { url, method, headers, body } = config;

  return await axios({
    method: method ? method : "get",
    headers: headers && headers,
    url: url,
    data: body && JSON.stringify(body),
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
