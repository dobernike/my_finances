export async function http(url: RequestInfo, method = 'GET', data: object = null) {
    try {
        const headers: HeadersInit = {};
        let body;

        if (data) {
            headers['Content-Type'] = 'application/json';
            body = JSON.stringify(data);
        }

        const response = await fetch(url, {
            method,
            headers,
            body,
        });

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}
