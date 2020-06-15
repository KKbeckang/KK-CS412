
function* fibnumbers() {
    let [val1, val2, result] = [0, 1, 0] //destructuring
    while (true) {
        result = val1 + val2;
        yield val1; // in order to start from 0 yield first
        [val1, val2] = [val2, result]
        ;
    }
}

let Fibs = fibnumbers();
let count = 6;

while (count --> 0) { //there is no '-->' operator in JS
    console.log(`The fibnums:${Fibs.next().value}`)
}
function * evenfib() {
    let fibNum = fibnumbers();
    while(true){
        let result = fibNum.next().value;
        if(!(result%2))yield result;
    }
}
let Evenfibs = evenfib();
let count1 = 7
while (count1 --> 0) { //there is no '-->' operator in JS
    console.log(`The Even Fibnums:${Evenfibs.next().value}`)
}
