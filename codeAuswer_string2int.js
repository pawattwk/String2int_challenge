function convertString2int(income) {
    let buffer = 0
    let result = 0 
    for (let index = 0; index < income.length; index++) {
      switch (income[index]) {
        case '1':
          buffer = 1
          break;
        case '2':
          buffer = 2
          break;
        case '3':
          buffer = 3
          break;
        case '4':
          buffer = 4
          break;
        case '5':
          buffer = 5
          break;
        case '6':
          buffer = 6
          break;
        case '7':
          buffer = 7
          break;
        case '8':
          buffer = 8
          break;
        case '9':
          buffer = 9
          break;
        case '0':
          buffer = 0
          break;
        default:
          // console.log("%s is not number", income[index])
          buffer = -1
          break;
      }
      if (buffer != -1) {
        result = buffer + result*10;
      }
    }
    return result
}



let stringIncome = "a5b7c3"; // input String here !!!

let auswerInt = convertString2int(stringIncome);

console.log("Auswer: Number from String %s is",stringIncome,auswerInt);