function palindrome(str) {
    const cadenaProcesada = str.toLowerCase().replace(/[\W_]/g, '');
  
     const cadenaInvertida = cadenaProcesada.split('').reverse().join('');
      
      if (cadenaProcesada === cadenaInvertida){
        return true
      }else {
        return false
      }
  
   
  }
  
  console.log(palindrome("racecar")); 
  console.log(palindrome("RaceCar")); 
  console.log(palindrome("race CAR")); 
  console.log(palindrome("2A3*3a2")); 
  console.log(palindrome("2A3 3a2")); 
  console.log(palindrome("2_A3*3#A2"));