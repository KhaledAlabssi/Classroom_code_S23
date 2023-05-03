
function a (name, age, long) {
    console.log("My name is: ",name);
    console.log("My age is: ", age);
    console.log("My tall is: ", long);

}
// a(37, "Sarah")

function mToC(m) {
    
    let result = m * 100;
    console.log(result);
    return result

}

function cToMm(c) {
    let result = c * 10
    console.log(result);
    return result
    
}

const x = mToC(3)
console.log(x);
const fin = cToMm(x)
console.log(fin);
