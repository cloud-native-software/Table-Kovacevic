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

        if (broj <= 0 || broj > 99) {
            console.log("Uneti brojevi su ", l)
            min_vrednost = l[0]
            max_vrednost = l[0]

            for (i = 1; i < l.length; i++) {
                if (l[i] < min_vrednost) {
                    min_vrednost = l[i]
                    console.log(min_vrednost)

                }
                if (l[i] > max_vrednost) {
                    max_vrednost = l[i]
                }
            }
            console.log("Minimalna vrednost je:", min_vrednost)
            console.log("Maximanlna vrednost je:", max_vrednost)
            console.log("Spisak parnih brojeva je: ", p)
            console.log("Spisak neparnih brojeva je: ", n)
            soritiranjee()
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
        if (broj % 2 == 0) {
            p.push(broj)

        }
        if (broj % 2 == 1) {
            n.push(broj)

        }

    }
    )
}
function soritiranje(){
    l.sort((a, b) => b - a);
    console.log("Sortirani brojevi od najveceg ka najmanjem", l)       
}
function soritiranjee(){
    l.sort((a, b) => a - b);
    console.log("Sortirani brojevi od najmanjeg ka najvecem", l)       
}
unesi_broj()
