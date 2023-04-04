const URL = 'https://lotin.uz/api/'
export function PostData(endpoint, data, token) {
    return fetch(`${URL + endpoint}`, {
        method: 'POST',
        headers: {
            "Authorization": 'Bearer ' + token,
            "Accept": '*/*',
            // 'Content-type': 'multipart/form-data'
            // "Content-Type": "multipart/form-data",
            // "type": "formData"
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
}
