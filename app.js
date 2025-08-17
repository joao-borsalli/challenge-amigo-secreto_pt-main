let amigos = [];
let botaoSortear = document.getElementById('btnSortear');
let textoInput = document.getElementById('amigo');
let textoBotao = document.getElementById('textoBotao'); // Pega o texto do <span>

function limparCampo() {
    let campoNome = document.querySelector('input');
    campoNome.value = '';
    document.getElementById('listaAmigos').innerHTML = '';
}

function criarLista() {
    document.getElementById('listaAmigos').innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let novoNomeLista = document.createElement('li');
        novoNomeLista.textContent = amigos[i];
        document.getElementById('listaAmigos').appendChild(novoNomeLista);
    }
}

function adicionarAmigo() {
    if (textoBotao.textContent === 'Recomeçar') {
        console.log('Texto Recomeçar');
        alert('Aperte o botão <Recomeçar>');
    } else {
        let nome = document.getElementById('amigo').value;
        if (nome === '') {
            alert('Digite um nome válido!');
            return; // Sai da função se o campo estiver vazio
        }
        amigos.push(nome);
        limparCampo();
        criarLista();
    }
}

function reiniciar() {
    // Altera o texto do botão
    textoBotao.textContent = 'Sortear amigo';
    textoInput.removeAttribute('disabled');
    exibirNomeSorteado('resultado', '');
    amigos = []; // Esvazia o array
    criarLista();
}

function finalSorteio() {
    textoBotao.textContent = 'Recomeçar';
    textoInput.setAttribute('disabled', true);
    amigos = '';
    criarLista();
}

function sortearAmigo() {
    if (textoBotao.textContent === 'Recomeçar') {
        reiniciar();
    } else {
        if (amigos.length < 2) {
            alert('Adicione pelo menos 2 nomes para sortear!');
        } else {
            let nomeSorteado = parseInt(Math.random() * amigos.length);
            let sorteado = amigos[nomeSorteado];
            exibirNomeSorteado('resultado', 'O amigo sorteado foi: ' + sorteado + '!');
            finalSorteio();
        }
    }
}

function exibirNomeSorteado(ID, texto) {
    let campo = document.getElementById(ID);
    campo.innerHTML = texto;
}