import { getParam, loadHeaderFooter } from "./utils.mjs";
import { login, checkLogin, isTokenValid } from "./auth.mjs";

const redirect = getParam("redirect");
loadPage();

function loadPage() {
    loadHeaderFooter();
    addListeners();

    function getLoginInfo(event) {
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;

        login( {email: email, pass: pass}, redirect);
    }

    function addListeners() {
        const loginButton = document.getElementById("login-button");
        loginButton.addEventListener('click', getLoginInfo);
    }
}