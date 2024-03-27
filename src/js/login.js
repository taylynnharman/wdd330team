import { getParam, loadHeaderFooter } from "./utils.mjs";
import { login } from "./auth.mjs";

loadPage();

function loadPage() {
    loadHeaderFooter();
    addListeners();

    const redirect = getParam("redirect");

    function getLoginInfo(event) {
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;

        login( {email: email, password: pass}, redirect)
            .then(token => {
                console.log(`Token received: ${token}`);
            })
            .catch(error => {
                console.error(`Error: ${error.message}`);
            });
    }

    function addListeners() {
        const loginButton = document.getElementById("login-button");
        loginButton.addEventListener('click', getLoginInfo);
    }
}