function operator(str) {
    const a = str.split("");
    if (a[1] == "+") return (parseInt(a[0]) + parseInt(a[2]))
    if (a[1] == "*") return (parseInt(a[0]) * parseInt(a[2]))
    if (a[1] == "%") return (parseInt(a[0]) % parseInt(a[2]))
    if (a[1] == "/") return (parseInt(a[0]) / parseInt(a[2]))
    if (a[1] == "-") return (parseInt(a[0]) - parseInt(a[2]))


}


console.log(operator('8+3'));
console.log(operator('8*3'));
console.log(operator('8/3'));
console.log(operator('8%3'));
console.log(operator('8-3'));