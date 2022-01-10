// Use .ENV url in production
const BASE_URL = "http://localhost:3000";

const requestOptions = {
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
} as const;

interface RequestTypes {
  data?: any;
  token?: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: { [key: string]: string };
}

export const apiRequest = async (
  url: string,
  { data = {}, token, method, headers = {} }: RequestTypes
) => {
  headers = { ...requestOptions.headers, ...headers };

  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  let fetchOptions: RequestInit = {
    ...requestOptions,
    method,
    headers,
  }

  if (data && method != "GET") fetchOptions.body = JSON.stringify(data);
  return await fetch(BASE_URL + url, fetchOptions);
};