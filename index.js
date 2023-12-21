const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
l = []
p = []
n = []
function unesi_broj() {
    rl.question('Unesite broj: ', (broj) => {
        broj = parseFloat(broj)

        if (broj < 0 || broj > 99) {
            console.log("Uneli ste neogovarajuci broj, unesite broj ponovo")
            unesi_broj()
        }
        else if (broj == 0) {
            console.log("Uneti brojevi su ", l)

            proveriParNepar()
            console.log("Spisak parnih brojeva je: ", p)
            console.log("Spisak neparnih brojeva je: ", n)
            soritiranje()

            let k = 0

            for (i = 0; i < l.length; i++) {
                k += l[i] / l.length

            }
            console.log("Srednja vrednost je:", k)
        }
        else {
            l.push(broj)
            unesi_broj()
        }
    }
    )
}
function soritiranje() {
    l.sort((a, b) => b - a);
    console.log("Sortirani brojevi od najveceg ka najmanjem", l)
    console.log("Maximalna vredost je: ", l[0])
    l.sort((a, b) => a - b);
    console.log("Sortirani brojevi od najmanjeg ka najvecem", l)
    console.log("Minimalna vrednost je: ", l[0])

}
function proveriParNepar() {
    for (let i = 0; i < l.length; i++) {
        let broj = l[i];

        if (broj % 2 === 0) {
            p.push(broj)

        } else {
            n.push(broj)

        }
    }
}


unesi_broj()
