function convertToRoman(numero) {

    const valoresRomanos =[
      {valor: 1000, numeral: 'M'},
      {valor: 900, numeral: 'CM'},
      {valor: 500, numeral: 'D'},
      {valor: 400, numeral: 'CD'},
      {valor: 100, numeral: 'C'},
      {valor: 90, numeral: 'XC'},
      {valor: 50, numeral: 'L'},
      {valor: 40, numeral: 'XL'},
      {valor: 10, numeral: 'X'},
      {valor: 9, numeral: 'IX'},
      {valor: 5, numeral: 'V'},
      {valor: 4, numeral: 'IV'},
      {valor: 1, numeral: 'I'}
    ];
  
      if (numero === 0) {
      return '';
    }
  
  
    for (let i = 0; i < valoresRomanos.length; i++) {
      if (numero >= valoresRomanos[i].valor) {
        return valoresRomanos[i].numeral + convertToRoman(numero - valoresRomanos[i].valor);
      }
    }
  
  }
  
  console.log(convertToRoman(3023));