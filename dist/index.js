"use strict";
// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.
const usuario = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI",
    salario: "",
};
function infos(usuario) {
    if (usuario.salario === "") {
        usuario.salario = "N/A";
        console.log(`${usuario.nome}, ${usuario.idade}, ${usuario.ocupacao}, ${usuario.salario}`);
    }
    else {
        console.log(`${usuario.nome}, ${usuario.idade}, ${usuario.ocupacao}, ${usuario.salario}`);
    }
}
infos(usuario);
const diretor = {
    nome: "Marcelo",
    idade: 34,
    salario: "R$ 10.000",
    comissionamento: 20
};
function mostrarDiretor(diretor) {
    console.log(`${diretor.nome}, ${diretor.idade}, ${diretor.comissionamento}, ${diretor.salario}`);
}
mostrarDiretor(diretor);
// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.
console.log("/////////////////////////////////");
const lista = [
    {
        nome: "Marcelo",
        idade: 34,
        salario: "R$ 10.000",
        comissionamento: 20
    },
    {
        nome: "Daphne",
        idade: 23,
        ocupacao: "analista de TI",
        salario: "R$ 1000",
    },
    {
        nome: "Jorge",
        idade: 37,
        ocupacao: "analista de TI",
        salario: "R$ 2000",
    }
];
function imprimir(lista) {
    lista.forEach(pessoa => {
        if ("comissionamento" in pessoa) {
            mostrarDiretor(pessoa);
        }
        else {
            infos(pessoa);
        }
    });
}
;
imprimir(lista);
