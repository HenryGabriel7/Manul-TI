
(function verificarAcessoImediato() {
    if (localStorage.getItem("logado") !== "true") {
        window.location.replace("login/login.html");
    }
})();

function logout() {
    localStorage.clear();
    window.location.replace("login/login.html");
}

window.onpageshow = function(event) {
    if (event.persisted || localStorage.getItem("logado") !== "true") {
        window.location.replace("login/login.html");
    }
};