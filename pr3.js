const a1 = "supercalifragilisticexpialidocious"
const apply = (inputstr, decorator)=>{
    return decorator(inputstr);
}

// console.log(apply(a1,(str)=>str.split('c')))
console.log(apply(a1,(str)=>str.split(/(?=c)/)))
console.log(apply(a1,(str)=>str.replace("a","A")))

const capA = apply(a1, str1 =>{
    return {
        "originalString:":str1,
        "modifiedString:":str1.replace("a","A"),
        "numberReplaced:":str1.split('a').length-1,
        "length:":str1.length

}}
)
console.log(capA);