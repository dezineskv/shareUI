let base = 10;
let exponent = 5;
let exponentCalc = Math.pow(base, exponent);

for (let n = 0; n < 100000; n++) {
    if ((n % 3 === 0) && (n % 5 !==0)) {
        console.log("Fuzz");       
    }
    else if ((n % 5 === 0) && (n % 3 !==0)) {
        console.log("Buzz");
    }
    else if ((n % 3 === 0) || (n % 5 ===0)) {
        console.log(n);
    }
    else if ((n % 3 === 0) && (n % 5 ===0)) {
        console.log("FizzBuzz");
    }  
    else {
        console.log(n)
    }
}
