
function* sensplitter(Str) {
    const Array = Str.split(" ").join('\n')
    yield Array

}
const inputStr = "All I know is something like a bird within her sang"
const test = sensplitter(inputStr);
console.log(test.next().value);