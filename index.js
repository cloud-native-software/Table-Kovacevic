const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
l = []
function unesi_broj() {
    rl.question('Unesite broj: ', (broj) => {
        broj = parseFloat(broj)
        if (broj != 0) {
            l.push(broj)
            unesi_broj()
        }
        else {
            console.log("Uneti brojevi su ", l)
            min_vrednost = l[0]
            max_vrednost = l[0]

            for (i = 1; i < l.length; i++) {
                if (l[i] < min_vrednost) {
                    min_vrednost = l[1]
                    console.log(min_vrednost)

                }
                if (l[i] > max_vrednost) {
                    max_vrednost = l[i]
                }
            }
            console.log("Minimalna vrednost je:", min_vrednost)
            console.log("Maximanlna vrednost je:",max_vrednost)

            let k = 0

            for (i = 1; i < l.length; i++) {
                k += l[i] / l.length

            }
            console.log("Srednja vrednost je:",k)
        }

    }

    )
}





unesi_broj()
