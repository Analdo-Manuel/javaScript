// comentário de uma linha

/* isto é um comentário longo
   de múltiplas linhas.
 */

/* Você não pode, porém, /* aninhar comentários */


// Tipos de variáveis

// var - variável global ou local a uma função inteira, independente do bloco
var nome = "João"; // string
var idade = 25; // number
var ativo = true; // boolean
var endereco = null; // null
var telefone; // undefined

// let - variável local a um bloco, escopo de bloco

let cidade = "São Paulo"; // string
let estado = "SP"; // string

// const - variável constante, não pode ser reatribuída

const PI = 3.14; // number
const NOME_COMPLETO = "João da Silva5"; // string

// Interação: alerta, aviso, confirmação e prompt
//alert("Bem-vindo ao meu site!"); // exibe uma mensagem de alerta
confirm("Deseja continuar?"); // exibe uma mensagem de confirmação com opções "OK" e "Cancelar"
let resultado = prompt("Digite seu nome:"); // exibe uma mensagem de prompt para o usuário digitar algo

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Ativo: " + ativo);
console.log("Endereço: " + endereco);
console.log("Telefone: " + telefone);
console.log("Cidade: " + cidade);
console.log("Estado: " + estado);
console.log("PI: " + PI);
console.log("Nome Completo: " + NOME_COMPLETO);

// Operadores de atribuição
var x = 10; // atribuição simples
x += 5; // adição e atribuição
x -= 3; // subtração e atribuição
x *= 2; // multiplicação e atribuição
x /= 4; // divisão e atribuição
x %= 3; // resto da divisão e atribuição

console.log("Valor de x: " + x);