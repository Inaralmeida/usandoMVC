class AnotacoesModel{
    constructor(listaQueFoiCriadaNoController){
        this._listaDeNotas = listaQueFoiCriadaNoController
    }

    criaAnotacao(titulo, texto){
        console.log('Estou na model')
       
        //cria o objeto anotacao com os dados que recebe como parametro
        const anotacao = {
            titulo: titulo,
            texto: texto,  
        }

        //salva a anotação no array Lista de notas
        this._listaDeNotas.push(anotacao)

        //devolve o objeto ANOTACAO para a controller
        return anotacao
    }
}























// class Pessoa{
//     constructor(nome, idade){
//         this._nome = nome,
//         this._idade = idade,
//         this._etnia = 'negra'
//     }

//     estudar(titulo, data){
//         const estudei ={
//             materia: titulo,
//             data: data
//         }
//         return estudei
//     }
// }

// const pessoa1 = new Pessoa('Inara', 23)

// const pessoa2 = new Pessoa('Carol', 22)
// console.log(pessoa1.estudar('MVC', '25/12/2021'))
// console.log(pessoa2)


















