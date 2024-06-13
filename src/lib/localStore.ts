import { browser } from "$app/environment";
import { get, writable } from "svelte/store";

export const apiKey = writable('');

export const model = writable('');

export function setApiKey(key: string): void {
    apiKey.set(key);
    if (browser) {
        localStorage.setItem('apiKey', key);
    }
}

export function getApiKey(): string {
    if (browser) {
        const apiKeyFromLocalStorage = localStorage.getItem('apiKey');
        if (apiKeyFromLocalStorage) {
            return apiKeyFromLocalStorage;
        }
    }
    return get(apiKey);
}

export function setModel(value: string): void {
    model.set(value);
    if (browser) {
        localStorage.setItem('model', value);
    }
}

export function getModel(): string {
    if (browser) {
        const modelFromLocalStorage = localStorage.getItem('model');
        if (modelFromLocalStorage) {
            return modelFromLocalStorage;
        }
    }
    return get(model);
}