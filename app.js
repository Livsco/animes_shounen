function pesquisar() {
    // Observa a seção do documento e busca o elemento por ID
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string vazia, não mostrar nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado encontrado. Você precisa indicar um anime.</p>"
        return
    }

    // transforma o conteúdo da pesquisa em letras minuscula
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Laço de repetição para iterar sobre cada dado da lista de resultados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada item do resultado
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Clique para saber mais</a><br>
            <br>
            <a href=${dado.acesso} target="_blank">Assista aqui!</a>
        </div>
    ` ;
        }
    }
    // Se resultados não forem encontrados, retorna a mensagem
    if (!resultados) {
        resultados = "<p>Nenhum anime encontrado</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}
