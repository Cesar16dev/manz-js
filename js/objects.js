//Qué son los objetos?
const objeto = {}; // Esto es un objeto vacío

const player = {
  //key:value
  name: "Manz",
  life: 99,
  power: 10,
  sing: function () {
    return "We're the champions";
  },
};

//console.log(player.sing());
//console.log(player.toString());

/// Creando objeto y añadiendo propiedades
// const person = {};
// person.name = "Cesar";
// person.age = 19;
// person.power = 30;

// JSON
// const json = `{
//   "name": "Manz",
//   "life": 99
// }`;
// const user = JSON.parse(json);
// console.log(user.name);
// console.log(user.life);

// const user = {
//   name: "Manz",
//   life: 99,
//   talk: function () {
//     return "Hola!";
//   },
// };

// const string = JSON.stringify(user);
// console.log(string);

// const user = {
//   name: "Manz",
//   role: "streamer",
//   life: 99,
// };

// //Destructuracion
// const { name, role: type, life } = user;

// console.log({ name, type, life });

// const user = {
//   name: "Manz",
//   role: "streamer",
//   life: 99,
//   features: ["learn", "code", "paint"],
// };

// const fullUser = {
//   ...structuredClone(user),
//   power: 25,
//   life: 50,
// };

// console.log(user.features);
// console.log(fullUser.features);

// fullUser.features[0] = "program";

// console.log(user.features);
// console.log(fullUser.features);

// const user = {
//   name: "Manz",
//   role: "streamer",
//   life: 99,
// };

// function show({ name, role, life }) {
//   const stars = "⭐".repeat(life / 20);
//   return `Nombre: ${name} (${role}) ${stars}`;
// }

// console.log(show(user));

const user = {
  name: "Manz",
  life: 99,
  power: 10,
  talk: function () {
    return "Hola!";
  },
};

//console.log(Object.keys(user));
//console.log(Object.values(user));
//console.log(Object.entries(user));

const animals = ["Gato", "Perro", "Raton"];
const species = ["Felino", "Canino", "Roedor"];
const entries = [];

for (const i of Object.keys(species)) {
  const value = animals[i];
  const key = species[i];
  entries.push([key, value]);
}

const info = Object.fromEntries(entries);
//console.log(entries);
//console.log(info);

const person = {
  nombre: "Cesar",
  apellido: "Ortega",
  edad: 19,
  profesion: "Developer",
};

//console.log(Object.entries(person));

const colors = ["red", "blue", "yellow", "cyan"];

const objet = ["apple", "sea", "taxi", "box"];

const keeper = [];

for (let i of Object.keys(colors)) {
  const key = objet[i],
    value = colors[i];
  keeper.push([key, value]);
}

let toObject = Object.fromEntries(keeper);

//console.log(toObject);
