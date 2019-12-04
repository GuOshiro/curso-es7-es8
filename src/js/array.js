const aprovados = ["Marcelo", "Aline", "Gustavo", "Ricardo"];

for (let nome of aprovados) {
  if (nome === "Guilherme") {
    console.log("Aprovado");
  } else {
    console.log("Nao encontrado");
  }
}

const nomeIndexOf = aprovados.indexOf("Gustavo");
console.log(nomeIndexOf);

const nomeAprovado = aprovados.includes("Guilherme");

if (nomeAprovado) {
  console.log("Você foi aprovado");
} else {
  console.log("Você não foi aprovado");
}

console.log(nomeAprovado);
