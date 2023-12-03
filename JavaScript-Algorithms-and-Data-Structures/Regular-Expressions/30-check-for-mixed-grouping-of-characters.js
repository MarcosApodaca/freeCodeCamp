let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/i; // Cambia esta línea
let result = myRegex.test(myString); // Cambia esta línea
// Después de pasar el desafío experimenta con myString y observa cómo funciona la agrupación