let spielstand_home = 0
let spielstand_guest = 0

function add() {
    spielstand_home +=1
    document.getElementById("tafel_home").textContent=spielstand_home
    console.log(spielstand_home)
}

function add2() {
    spielstand_home +=2
    document.getElementById("tafel_home").textContent=spielstand_home
    console.log(spielstand_home)
}

function add3() {
    spielstand_home +=3
    document.getElementById("tafel_home").textContent=spielstand_home
    console.log(spielstand_home)
}

function add11() {
    spielstand_guest +=1
    document.getElementById("tafel_guest").textContent = spielstand_guest
    console.log(spielstand_guest)
}

function add22() {
    spielstand_guest +=2
    document.getElementById("tafel_guest").textContent = spielstand_guest
    console.log(spielstand_guest)
}

function add33() {
    spielstand_guest +=3
    document.getElementById("tafel_guest").textContent = spielstand_guest
    console.log(spielstand_guest)
}