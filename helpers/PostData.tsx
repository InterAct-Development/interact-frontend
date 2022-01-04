
// Use .ENV url in production
const BASE_URL = "http://localhost:3000"

async function postData(url: string, data = {}) {

    const response = await fetch(BASE_URL + url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    })

    return response.json()
}

export default postData;