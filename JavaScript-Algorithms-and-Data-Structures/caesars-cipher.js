function rot13(str) {
  return str.replace(/[A-Z]/g, (letter) => {
    const asciiCode = letter.charCodeAt(0);
    const startUppercase = 'A'.charCodeAt(0);
    const decodedAscii = ((asciiCode - startUppercase + 13) % 26) + startUppercase ;
    return String.fromCharCode(decodedAscii);
  });
}

rot13("SERR PBQR PNZC");
