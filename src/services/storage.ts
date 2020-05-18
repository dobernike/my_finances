export function storage(key: string, data: object | string = null) {
    if (!data) {
        return JSON.parse(localStorage.getItem(key));
    }
    return localStorage.setItem(key, JSON.stringify(data));
}
