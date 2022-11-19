const pessoas = [
  { i: 1, name: "Fabiana Araújo", age: 33 },
  { i: 2, name: "Gabriel Gomes", age: 25 },
  { i: 3, name: "Fernando Henrique", age: 17 },
  { i: 4, name: "Ana Luiza", age: 2 },
  { i: 5, name: "Geralda do Nascimento", age: 93 },
  { i: 6, name: "Miguel Souza", age: 70 },
  { i: 7, name: "Antonio Miguel", age: 69 },
];

function validaCarteira() {
  const idade = pessoas.filter((maiorIdade) => maiorIdade.age >= 18);
  console.log(idade);
}

validaCarteira();