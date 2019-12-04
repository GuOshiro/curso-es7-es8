const nome = "Gustavo";
const sobrenome = "Oshiro";

//pad start
const nomeCompleto = nome + ` ` + sobrenome;

const nomeCompletoStringPadding = sobrenome.padStart(14, nome);

document.getElementById("stringPad").innerHTML = nomeCompletoStringPadding;

const numeroCartao = "4890";

document.getElementById("numeroCartao").innerHTML = numeroCartao.padStart(
  16,
  "*"
);

//pad end 

const nomeCompletoPadEnd = nome.padStart(14, sobrenome);

document.getElementById("stringPadEnd").innerHTML = nomeCompletoStringPadding;
