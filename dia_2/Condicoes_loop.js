// Condições e Loop (Esturara condicionar e de repetição)

console.log("if/else");

let idade = 18;
let continente = "Europa";

let texto = "Você é maior de idade e pode entrar no site.";

if (idade >= 18 && continente === "Europa") {
    console.log(texto);
} else if (idade < 18) {
    console.log("Você é menor de idade e não pode entrar no site.");
} else if (continente !== "Europa") {
    console.log("Você não está na Europa e não pode entrar no site.");
} else {
    console.log("Condição não atendida.");
}

// Operador ternario

console.log("Operador ternário");
let res = (idade >= 18) ? "Maior" : "Menor";
console.log(res);

// Switch case

console.log("Switch case");

let dia = 3;

switch (new Date().getDay()) {
    case 1:
        console.log("Hoje é segunda-feira.");
        break;
    case 2:
        console.log("Hoje é terça-feira.");
        break;
    case 3:
        console.log("Hoje é quarta-feira.");
        break;
    case 4:
        console.log("Hoje é quinta-feira.");
        break;
    case 5:
        console.log("Hoje é sexta-feira.");
        break;
    case 6:
        console.log("Hoje é sábado.");
        break;
    case 0:
        console.log("Hoje é domingo.");
        break;
    default:
        console.log("Dia inválido.");
}

// Loop (Estrutura de repetição)

console.log("Loop");

let contador = 0;

while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

let cars = ["BMW", "Volvo", "Saab", "Ford"];

let text = "Carros: ";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + ", ";
}
console.log(text);


do {
    console.log("Do while loop: " + contador);
    contador++;
} while (contador < 5);

