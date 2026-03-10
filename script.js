function obterCaminhoLogin() {
    const path = window.location.pathname;
    const naRaiz = path.endsWith("index.html") || path.endsWith("/");
    return naRaiz ? "login/login.html" : "../login/login.html";
}

(function verificarAcessoImediato() {
    if (localStorage.getItem("logado") !== "true") {
        window.location.replace(obterCaminhoLogin());
    }
})();

function logout() {
    localStorage.clear();
    window.location.replace(obterCaminhoLogin());
}

window.onpageshow = function(event) {
    if (event.persisted || localStorage.getItem("logado") !== "true") {
        window.location.replace(obterCaminhoLogin());
    }
};
