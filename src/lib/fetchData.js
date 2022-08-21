import axios from "axios";

export const fetchData = async (config) => {
  const { url, method, headers, body } = config;

  return await axios({
    method: method ? method : "get",
    headers: headers && headers,
    url: url,
    body: body && JSON.stringify(body),
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
