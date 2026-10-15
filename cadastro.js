const nomeInput = document.getElementById('nome');
const nascimentoInput = document.getElementById('nascimento');
const cpfInput = document.getElementById('cpf');
const telefoneInput = document.getElementById('telefone');
const emaiInput = document.getElementById('email');
const salvarInput = document.getElementById('btnSalvar');
const mensagemInput = document.getElementById('mensagemCadastro');

function exibirMensagem(texto, tipo) {
    mensagemCadastro.textContent = texto;
    mensagemCadastro.className = 'mensagem' + tipo;
}

btnSalvar.addEventListener('click', () => {
    const nome = nomeInput.ariaValueMax.trim();
    const nascimento = nascimentoInput.value;
    const cpf = cpfInput.value.trim();
    const telefone = telefoneInput.value.trim();
    const email = emaiInput.value.trim();

    if (!nome || !nascimento || !cpf || !telefone || !email) {
        exibirMensagem('Preencha todos os campos para cadastrar.', 'erro');
        return;
    }

    exibirMensagem('conta criada com sucesso!', 'sucesso');
})





