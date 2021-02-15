let bitcoin = 1
let wallstreetQuant = 1
let elonQuant = 1
let rhQuant = 1
let spacexQuant = 1

var upgrades = {
    wallstreet:{
        quantity: 0,
        cost: 10,
        generator: 10
    },
    elon:{
        quantity: 0,
        cost: 50,
        generator: 50
    },
    robinhood:{
        quantity: 0,
        cost: 10000,
        generator: 1
    },
}

let autoUpgrades = {
    spacex:{
        quantity: 0,
        cost: 100,
        generator: 100
    }
}
function mine(){
    bitcoin += 1
    console.log(bitcoin)
    draw()
}

//check resources
//increase purchased count
//decrease resource count
function wallStreet(){
    if(_bitcoin => 10){
        bitcoin -=10
        draw()
    } else {
        alert("Not enough")
    }
    wallstreetQuant ++
    function clickMod(){
        bitcoin += 4
        draw()
    }
}
function elonMusk(){
    if(bitcoin => 50){
        bitcoin -=50
        draw()
    } else {
        alert("Not enough")
    }
    elonQuant ++
}
function robinHood(){
    if(bitcoin => 10000){
        bitcoin -=10000
        draw()
    } else {
        alert("Not enough")
    }
    rhQuant ++
}
function spaceX(){
    if(bitcoin => 100){
        bitcoin -=100
        draw()
    } else {
        alert("Not enough")
    }
    spacexQuant ++
}
// function mine(){
//     for (let key in items) {
//         let item = items[key]
//         let newCost = item.generator * item.quantity
//         bitcoin += newCost
//     }
//     draw()
//}
function draw(){
    document.getElementById("currentBitcoins").innerHTML = `Bit Coins: ${bitcoin}`
    document.getElementById("wallstreet-q").innerHTML = `Quantity: ${wallstreetQuant}`
    document.getElementById("elonQ").innerHTML = `Quantity: ${elonQuant}`
    document.getElementById("rhQ").innerHTML = `Quantity: ${rhQuant}`
    document.getElementById("spacexQ").innerHTML = `Quantity: ${spacexQuant}`
}
