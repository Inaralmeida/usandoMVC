const controller = new AnotacoesController()
console.log('Controller foi instanciada')

$('button').click((e)=>{
    e.preventDefault()
    controller.addNota()
})