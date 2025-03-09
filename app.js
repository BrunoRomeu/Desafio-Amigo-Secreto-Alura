//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos.
let amigos = [];

// Função para adicionar um novo amigo.
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim(); //Verificar espaçoes em branco no campo.

    // Verifica se o nome está vazio.
    if (!nomeAmigo) {
        alert('Digite o nome do seu amigo(a)');
        return;
    }

    // Verifica se o nome já existe na lista de amigos.
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado. Por favor, insira outro participante!");
        return;
    }

    // Limpa a mensagem do ganhador quando o primeiro nome é adicionado
    if (amigos.length === 0) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = ''; // Limpa a mensagem do ganhador
    }

    // Adiciona o nome ao array de amigos e limpa o campo de input.
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    atualizarLista();

}

// Função para atualizar a lista de amigos.
function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    // Inserindo os nomes dos amigos na lista.  
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }

}

// Função para sortear um amigo.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos(a) para brincar!');
        return;
    }

    // Sorteando um amigo aleatório e atualizando a lista.
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O Ganhador do sorteio foi: ${sorteado.toUpperCase()}`;

    // Limpando a lista de amigos e zerando o array.
    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = '';
    amigos = [];

}

// Adicionando o evento de teclado ao input para "ENTER".
document.getElementById('amigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});