class AnotacoesController{
    constructor(){
        this._listaDeNotas = []
    }

    addNota(){
        //Pegamos os dados do formulario 
        const titulo = $('#titulo').val()
        const texto = $('#texto').val()
        
        //instanciamos a model passando a lista de notas como parametro 
         const model = new AnotacoesModel(this._listaDeNotas)

         //chamamos o método cria anotacao passando titulo e texto como parametro
         const anotacao = model.criaAnotacao(titulo, texto)

         console.log(anotacao)

         //instanciar a view
         const view = new AnotacoesView()
         view.renderizaAnotacao(anotacao)
    }
}