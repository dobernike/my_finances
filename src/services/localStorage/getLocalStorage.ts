export const getLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key));
};
