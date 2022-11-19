const pessoas = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];

function arrToVetor() {
  const vetor = pessoas.map((element) => {
    return element.name;
  });
  const onlyFirstName = pessoas.map((element) => {
    return element.name.split(" ", 1);
  });
  console.log("Nome completo:");
  console.log(vetor);
  console.log("Apenas o primeiro nome:");
  console.log(onlyFirstName);
}

arrToVetor();
