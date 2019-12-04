const { angular, ...frameworks } = cursos;
console.log("angular:", angular);
console.log("framerworks:", frameworks);

const novosCursos = { angular, ...framerworks };
console.log("novos:", novosCursos);
