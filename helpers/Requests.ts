// Use .ENV url in production
const BASE_URL = "http://localhost:3000";

const postData = async (url: string, data = {}) =>
    await fetch(BASE_URL + url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    });

export const getData = async (url: string, token?: string) =>
    await fetch(BASE_URL + url, {
        method: "GET",
        mode: "cors",
        credentials: "omit",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
    });

export default postData;
