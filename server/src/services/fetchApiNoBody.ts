const fetchApi = require("isomorphic-fetch");

export const fetchApiRequestNoBody = async (url: string) => {
  return await fetchApi(url)
    .then((response: any) => response.json())
    .catch((error: any) => error);
};
