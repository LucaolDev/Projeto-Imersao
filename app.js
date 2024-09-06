function pesquisar() {

    let section = document.getElementById("resultado-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<h3>Digite o nome de uma linguagem</h3>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""
    let titulo = ""
    let descricao = ""
    let tags = ""

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ){

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao">${dado.descricao}</p>
                <p><strong>Ano de criação:</strong> ${dado.anoCriacao}</p>
                <p><strong>Paradigmas:</strong> ${dado.paradigmas.join(', ')}</p>
                <p><strong>Uso principal:</strong> ${dado.usoPrincipal}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
        `;
        }
    }

    if(!resultados){
        resultados = "<h3>Nada Foi encontrado</h3>"
    }

    section.innerHTML = resultados


}
