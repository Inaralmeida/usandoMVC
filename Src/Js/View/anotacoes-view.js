class AnotacoesView{

    renderizaAnotacao(anotacao){
        //cria o elemento div
        const div = $('<div>')

        //cria o elemento h6 === titulo
        const tagH3 = $('<h3>').text(anotacao.titulo)

        //cria o elemento p === texto
        const tagP = $('<p>').text(anotacao.texto)

        div.append(tagH3)
        div.append(tagP)
        $('#anotacoes').append(div)
    }
}