document.getElementById("button").addEventListener("click", function() {
    let contador = 0
    for (let x = 1; x <= 100000; x++) {
        contador = 0
        for (let y = 1; y <= x; y++) {
            if (x % y == 0) {
                contador++
            }
        }
        if (contador == 2) {
            document.getElementById("result").innerHTML += x + " "
        }
    }
})