// Problem 3

const testArr = [1,2,3,4,5,6,7]

function myFunction(num) {
    return num * num * num;
}

var myarr = testArr.map(myFunction)
console.log(myarr);