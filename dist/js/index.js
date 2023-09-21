"use strict";
//tsc -w
//string, boolean, number
let age = 21;
let Name = "Lúcio";
let isAdmin = true;
let a = 2;
a = 5;
console.log("Number ", a);
//DECLARAÇÃO: ANOTATION E INFERENCIA
//Anotatoin
let Z = "Lúcio";
console.log(Z);
//Inferencia
let X = "José";
console.log(X);
//OBJECTOS
let arrFrutas = ["Banana", "Manga"];
arrFrutas.push("Laranja");
console.log(arrFrutas);
//Tupla
let arrMix;
arrMix = ["Ola", 3, ["Leila", "Ao"], 2];
console.log(arrMix);
//Objecto literal -> {prop: typeValue}
const user = {
    name: "Canga",
    contact: 92143546
};
console.log(user);
//any - desfaz a tipagem do typeScript
let A;
A = ["Ola", 2, "Mundo"];
console.log(A);
A = 12;
console.log(A);
// Union types
let id = "akskd";
id = 12121;
let numberBi = 121;
console.log(typeof numberBi);
let Description = "Lorem Ipsom";
console.log(Description);
//Enun
const tamanho = {
    P: "Pequeno",
    M: "Médio",
    G: "Grande"
};
const Tshirt = {
    cor: "Azul",
    size: tamanho.M,
    preco: 1000
};
console.log(Tshirt);
// literal type
let state;
//bug
//state= "ndsjs"
//Right
state: "isAutenticate";
//FUNCOES
function suma(a, b) {
    return a + b;
}
console.log(suma(7, 13));
function callName(Name) {
    return `Ola!, eu sou ${Name}`;
}
console.log(callName("Canga Dev"));
//
//bug
function greeting(name, greet) {
    console.log(`Ola ${greet}, ${name} `);
}
greeting("Lucio");
//Right
function greeting1(name, greet) {
    if (greet) {
        console.log(`Ola ${greet}, ${name} `);
        return;
    }
    console.log(`Ola ${name} `);
}
greeting1("Lucio", "Senhor");
;
function Concat(numberstring) {
    return numberstring.n1 + ` ` + numberstring.n2;
}
console.log(Concat({ n1: 2, n2: "Quantidades" }));
function soma(numbers) {
    console.log(numbers.number1 + numbers.number2);
}
soma({ number1: 12, number2: 3 });
//Desestruturar
function Multiplica({ number1, number2 }) {
    console.log(number1 * number2);
}
Multiplica({ number1: 5, number2: 2 });
//Narrowing - é a checagem de tipos, faz com que a lógica script seja executado dependo do tipo de valor da variavel.
function doSome(info) {
    if (typeof info === "string") {
        console.log("Nome " + info);
        return;
    }
    console.log("idade " + info);
}
;
console.log(doSome("Lucio DEv"));
//generics - permitir diversos tipos de valor, igual ao any
function FuncGeric(arr) {
    arr.forEach((item) => {
        console.log("ITEM ", item);
    });
}
const arr1 = ["banana", "leite", 12];
const arr2 = [12, 13, 14, 18];
console.log(FuncGeric(arr1));
console.log(FuncGeric(arr2));
class User {
    constructor(nome, role, isAutenticate) {
        this.nome = nome;
        this.role = role;
        this.isAutenticate = isAutenticate;
    }
    //Funcao pra mostrar apenas 1 elemento
    ShowName() {
        console.log("Nome: ", this.nome);
    }
    //ShowAutenticate
    ShowPermission(permissio) {
        if (permissio) {
            console.log("Permission: ", this.isAutenticate);
            return;
        }
        console.log("SEM PERMISSAO");
    }
}
;
let Usuario = new User("Lucio", "admin", false);
console.log(Usuario);
Usuario.ShowName();
Usuario.ShowPermission(false);
class Car {
    constructor(marca, cor) {
        this.marca = marca;
        this.cor = cor;
    }
    ShowCor() {
        console.log(`Cor ${this.cor}`);
    }
}
const Carro = new Car("Toyota", "Azul");
console.log(Carro);
console.log(Carro.ShowCor());
