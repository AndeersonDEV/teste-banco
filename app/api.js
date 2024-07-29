async function listaNotas() {
    const conexao = await fetch("https://c1c6e455-17c5-45a5-a39d-4e83ff79717c-00-2t1hvmfdaqg5q.worf.replit.dev/Notas");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

const lista = document.querySelector("#itemList");
function constroiCard(loja, chave, status) {
    const chaveAcesso = document.createElement("tr");
    chaveAcesso.className = "itemList";
    chaveAcesso.innerHTML = `
    <td class="chave">${chave}</td>
    <td class="status">${status}</td>
    <td class="loja">${loja}</td>
    `

    return chaveAcesso;
}

async function listaNotasNaTela() {
    try {
        const listaApi = await listaNotas();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.loja, elemento.chave, elemento.status)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de chaves</h2>`
    }
}



listaNotasNaTela();

function pesquisarLoja(evento){
    evento.preventDefault();
    fetch('https://c1c6e455-17c5-45a5-a39d-4e83ff79717c-00-2t1hvmfdaqg5q.worf.replit.dev/Notas')
    .then(response => response.json())
    .then(data => {
        const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
        const chaveParaPesquisar = "1111";
        const resultado = data.find(item => item.loja === dadosDePesquisa);
        console.log(resultado);
    })
    .catch(error => console.error('Erro:', error));

}
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => pesquisarLoja(evento))