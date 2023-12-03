let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no+/g; // Cambia esta línea
let result = ohRegex.test(ohStr);