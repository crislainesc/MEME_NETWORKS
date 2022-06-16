const fetchApi = require("isomorphic-fetch");

export interface IMemeCreated {
  id: string;
  name: string;
  url: string;
  character: string;
  topText: string;
  topTextSize: number;
  buttonText: string;
  buttonTextSize: number;
  capitalLetters: boolean;
}

export const fetchApiRequestWithBody = async (
  url: string,
  body: IMemeCreated
) => {
  return await fetchApi(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response: any) => response.json())
    .catch((error: any) => error);
};
