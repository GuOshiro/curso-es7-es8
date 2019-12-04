const cursosChave = Object.keys(cursos).map(chave => cursos[chave]);

renderizarLista("cursosChave", cursosChave)

const cursosKeys = Object.values(cursos);
renderizarLista("cursosValues", cursosKeys)
