export function debounce(func: Function, time: number) {
    let timeout: any;
    return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), time);
    };
}
