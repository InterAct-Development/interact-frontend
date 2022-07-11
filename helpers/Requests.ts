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
  params?: Record<string, string>
}

export const apiRequest = async (
  url: string,
  { data = {}, token, method, headers = {}, params = {} }: RequestTypes,

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

  // Add the params to end of url string
  url += `?${new URLSearchParams({ "locale": "fr", ...params, })}`
  return await fetch(url, fetchOptions);
};