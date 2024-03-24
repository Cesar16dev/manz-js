//Crear un programa que muestre en consola los números impares entre el 0 y el 20

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 1; i < numbers.length + 1; i++) {
  if (!(i % 2 == 0)) console.log(`El numero: ${i} es impar`);
}
