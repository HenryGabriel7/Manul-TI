
(function verificarAcessoImediato() {
    if (localStorage.getItem("logado") !== "true") {
        window.location.replace("../login/login.html");
    }
})();

function logout() {
    localStorage.clear();
    window.location.replace("../login/login.html");
}

window.onpageshow = function(event) {
    if (event.persisted || localStorage.getItem("logado") !== "true") {
        window.location.replace("../login/login.html");
    }
};


    verificarAcesso();
    document.addEventListener('click', function(e) {
    if (e.target.closest('summary')) return;
    const d = e.target.closest('details[open]');
    if (d) {
        d.removeAttribute('open');
    }
});