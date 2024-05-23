//votre code ici
 function printNumbers(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i + ' ';
    }
    return result.trim(); 
}

// Exemples d'utilisation
console.log(printNumbers(5)); 
console.log(printNumbers(10000000)); 

export default printNumbers
