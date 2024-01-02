function checkCashRegister(price, cash, cid) {
  const unidadesMonetarias = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let cambioAdeudado = cash - price;
  let totalEnCajon = 0;

  for (let i = 0; i < cid.length; i++) {
    totalEnCajon += cid[i][1];
  }

  totalEnCajon = totalEnCajon.toFixed(2);

  if (parseFloat(totalEnCajon) < cambioAdeudado) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (parseFloat(totalEnCajon) === cambioAdeudado) {
    return { status: "CLOSED", change: cid };
  } else {
    let cambio = [];
    for (let i = unidadesMonetarias.length - 1; i >= 0; i--) {
      const [nombreMoneda, valorMoneda] = unidadesMonetarias[i];
      const cantidadEnCajon = cid[i][1];
      const cantidadAdevolver = Math.min(
        Math.floor(cambioAdeudado / valorMoneda) * valorMoneda,
        cantidadEnCajon
      );

      if (cantidadAdevolver > 0) {
        cambioAdeudado = (cambioAdeudado - cantidadAdevolver).toFixed(2);
        cambio.push([nombreMoneda, parseFloat(cantidadAdevolver)]);
      }
    }

    if (parseFloat(cambioAdeudado) > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: cambio };
    }
  }
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);