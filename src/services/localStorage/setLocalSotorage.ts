export const setLocalStorage = (key: string, value: object | string) => {
    const stringifiedValue = JSON.stringify(value);

    localStorage.setItem(key, stringifiedValue);
};
