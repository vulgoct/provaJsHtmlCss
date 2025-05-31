const listaStorage = localStorage.getItem("novoLivro");
let novoLivro = listaStorage ? JSON.parse(listaStorage) : [];

function buscarTitulo (){
    const inputTitulo = document.getElementById("input_titulo");
    const valorTitulo = inputTitulo.value;
console.log("buscando titulo" + valorTitulo);
fetch("https://brasilapi.com.br/api/isbn/v1/" + valorTitulo)
.then((resposta) => {
    return resposta.json();
})
.then((json) => {
    console.log(json);

    const inputSubtitulo = document.getElementById("input_subtitulo");
    inputSubtitulo.value = json.subtitle;

    const inputAutores = document.getElementById("input_autores");
    inputAutores.value = json.authors;

    const inputEditora = document.getElementById("input_editora");
    inputEditora.value = json.publisher;

    const inputSinopse = document.getElementById("input_sinopse");
    inputSinopse.value = json.synopsis;

    const inputAno = document.getElementById("input_ano");
    inputAno.value = json.year;

    const inputQuantidade = document.getElementById("input_quantidade");
    inputQuantidade.value = json.page_count;

    const inputCategorias = document.getElementById("input_categorias");
    inputCategorias.value = json.subject;

    const inputImagem = document.getElementById("input_imagem");
    inputImagem.value = json.cover_url;
    })

    .catch(error => {
        console.error("Erro ao buscar ISBN:", error);
    });
}

function clicarBuscar (){
    console.log ("Clicou para Buscar");

    const inputTitulo = document.getElementById("input_titulo");
    const valorTitulo = inputTitulo.value;

    const inputSubtitulo = document.getElementById("input_subtitulo");
    const valorSubtitulo = inputSubtitulo.value;

    const inputAutores = document.getElementById("input_autores");
    const valorAutores = inputAutores.value;

    const inputEditora = document.getElementById("input_editora");
    const valorEditora = inputEditora.value;

    const inputSinopse = document.getElementById("input_sinopse");
    const valorSinopse = inputSinopse.value;

    const inputAno = document.getElementById("input_ano");
    const valorAno = inputAno.value;

    const inputQuantidade = document.getElementById("input_quantidade");
    const valorQuantidade = inputQuantidade.value;

    const inputCategorias = document.getElementById("input_categorias");
    const valorCategorias = inputCategorias.value;

    const inputImagem = document.getElementById("input_imagem");
    const valorImagem = inputImagem.value;

    const novoLivro = {
        title: valorTitulo,
        subtitle: valorSubtitulo,
        authors: valorAutores,
        publisher: valorEditora,
        synopsis: valorSinopse,
        year: valorAno,
        page_count: valorQuantidade,
        subject: valorCategorias,
        cover_url: valorImagem,
    }
}

function configurarEventos(){
    const inputTitulo = document.getElementById("input_titulo");
    inputTitulo.addEventListener ("focusout", buscarTitulo);

    const botaoBuscar = document.getElementById("input_botao");
    botaoBuscar.addEventListener("click", clicarBuscar);
}

window.addEventListener("load", configurarEventos);