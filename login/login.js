
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const erroDiv = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const usuarioInserido = document.getElementById('usuario').value;
            const senhaInserida = document.getElementById('senha').value;

            const USUARIO_MESTRE = "admin"; 
            const SENHA_MESTRE = "admin";

            if (usuarioInserido === USUARIO_MESTRE && senhaInserida === SENHA_MESTRE) {
                
                localStorage.setItem("logado", "true");
                localStorage.setItem("usuarioAtivo", usuarioInserido);
                
                window.location.replace("../index.html"); 
            } else {
                erroDiv.innerText = "Usuário ou senha incorretos!";
                erroDiv.style.display = "block";

                document.getElementById('senha').value = "";
                document.getElementById('senha').focus();
            }
        });
    }

});
