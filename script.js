const UsuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const btnConfirmar = document.getElementById('btnConfirmar');
const mensagemFeedback = document.getElementById('mensagemFeedback');

function exibirMensagem (texto, tipo){
    mensagemFeedback.textContent = texto;
    mensagemFeedback.className = 'mensagem' + tipo;
}