let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Cambia esta línea
let result = reRegex.test(repeatNum);