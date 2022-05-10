function getFibonacci(){
    const userNumber = Number(document.getElementById('input-user').value)
    
    let a = 0
    let b = 1
    let secFibonacci = 0
    const arrayFibonacci = [a, b]

    for (let cont = 2; cont < userNumber; cont++) {
        secFibonacci = a + b
        a = b
        b = secFibonacci
        arrayFibonacci.push(secFibonacci)
    }
    document.getElementById('result').innerHTML = arrayFibonacci
}