//P.R.E.P

//Parameter = 2 numbers will be given. Both numbers will be positive

//Return - return to the console

//Example - countBy(2,5) === [2,4,6,8,10]

//Psuedo code - 
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

console.log(countBy(2,5))