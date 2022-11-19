const pessoas = [
  { i: 1, name: "Fabiana Araújo", age: 33 },
  { i: 2, name: "Gabriel Gomes", age: 25 },
  { i: 3, name: "Fernando Henrique", age: 17 },
  { i: 4, name: "Ana Luiza", age: 2 },
  { i: 5, name: "Geralda do Nascimento", age: 93 },
  { i: 6, name: "Miguel Souza", age: 70 },
  { i: 7, name: "Antonio Miguel", age: 69 },
];

function mediaIdade() {
  const vetor = pessoas.map((idade) => {
    return idade.age;
  });
  const resultado =
    vetor.reduce(function (soma, i) {
      return soma + i;
    }) / vetor.length;
  console.log(resultado.toFixed(2));
}

mediaIdade();