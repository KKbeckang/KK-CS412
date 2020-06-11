function alphabet_order(str){
    return str.split("").sort().join("");
}
console.log(alphabet_order("supercalifragilisticexpialidocious"))
console.log(alphabet_order("javascript"))
console.log(alphabet_order("part1"))
console.log(alphabet_order("part1?><{}L:"))