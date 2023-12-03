let sampleWord = "astronaut";
let pwRegex = /\d*\D(?=\w{5})(?=\D*\d{2,})/; // Cambia esta línea
let result = pwRegex.test(sampleWord);