import { db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Agora você já pode usar a variável "db" para buscar seus manuais!

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