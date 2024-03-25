//¿Qué es un array?
//Es una colección o agrupación de elementos en una misma variable

//¿Qué son las Array functions?

const letters = ["a", "b", "c", "d", "e"];

let usingWith = letters.with(1, "B");
console.log(usingWith);
console.log(letters);

letters.forEach((letter, index) => {
  //console.log(`Las primeras letras del ABC son : ${letter}`);
});

letters.push("f");
//console.log("---------------");

letters.forEach((letter, index) => {
  //console.log(`Las primeras letras del ABC son : ${letter}`);
});
