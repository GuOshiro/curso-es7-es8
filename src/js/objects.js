//entries
const cursos = { javascript: 1, react: 2, angular: 3, vue: 4 }

const objectKeys = Object.keys(cursos)
const objectEntries = Object.entries(cursos)
const objectEntriesMap = new Map(objectEntries)


document.getElementById('objectKeys').innerHTML = objectKeys.map(curso => `<li>${curso}</li>`);
document.getElementById('objectEntries').innerHTML = objectEntries.map(curso => `<li>${curso}</li>`);

console.log(objectEntriesMap.has('javascript'))
console.log(objectEntriesMap.get('javascript'))

//values
const objectValues = Object.values(cursos);

document.getElementById('objectKeysValue').innerHTML = objectKeys.map(index => `<li>${cursos[index]}</li>`);
document.getElementById('objectValues').innerHTML = objectValues.map(curso => `<li>${curso}</li>`);


//rest
let { javascript, react, ...frameworks } = cursos;
document.getElementById('objectRest').innerHTML = `<li>${javascript}</li> <li>${react}</li>  <li>${JSON.stringify(frameworks)}</li>`

//spread
let spread = { javascript, react, ...frameworks };
spread = Object.entries(spread)
document.getElementById('objectSpread').innerHTML = spread.map(item => `<li>${JSON.stringify(item)}</li>`)
