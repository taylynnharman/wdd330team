import { loginRequest } from "./externalServices.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { jwtDecode } from "jwt-decode";

const tokenKey = 'so-token';
export async function login (creds, redirect) {
    try {
        const token = await loginRequest(creds);
        setLocalStorage(tokenKey, token);
        if (redirect != null) {
            window.location = redirect;
        } else {
            window.location = "/index.html";
        }
    } catch (err) {
        alert(err.message);
    }
}

export function checkLogin() {
    const token = getLocalStorage(tokenKey);
    if (!isTokenValid(token)) {
        localStorage.removeItem(tokenKey);
        const location = window.location;
        window.location = `/login/index.html?redirect=${location.pathname}`;
    } else {
        return token;
    }
}

export function isTokenValid(token) {
    if (token) {
        const decoded = jwtDecode(token);
        let today = new Date();
        return decoded.exp * 1000 >= today.getTime();
    } else {
        return false;
    }
}