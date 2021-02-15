let bitcoin = 1
let genMultiplier = 0
// let wallstreetQuant = 1
// let elonQuant = 1
// let rhQuant = 1
// let spacexQuant = 1
// let interval = 4000

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
    bitcoin += genMultiplier
    draw()
}

//check resources
//increase purchased count
//decrease resource count
function wallStreet(){
    if(bitcoin >= upgrades.wallstreet.cost){
        bitcoin -= upgrades.wallstreet.cost
        upgrades.wallstreet.quantity ++
        upgrades.wallstreet.cost *= 5
        // upgrades.wallstreet.generator *= 2
        genMultiplier += upgrades.wallstreet.generator
        console.log(genMultiplier)
        draw()
    } else {
        alert("Not enough")
    }
}
function elonMusk(){
    if(bitcoin >= upgrades.elon.cost){
        bitcoin -= upgrades.elon.cost
        upgrades.elon.quantity ++
        upgrades.elon.cost *= 5
        //upgrades.elon.generator *= 2
        genMultiplier += upgrades.elon.generator
        console.log(genMultiplier)
        draw()
    } else {
        alert("Not enough")
    }
    
}
function robinHood(){
    if(bitcoin >= upgrades.robinhood.cost){
        bitcoin -= upgrades.robinhood.cost
        upgrades.robinhood.quantity ++
        upgrades.robinhood.cost *= 5
        //upgrades.robinhood.generator *= 2
        genMultiplier += upgrades.robinhood.generator
        console.log(genMultiplier)
        draw()
    } else {
        alert("Not enough")
    }
    
}
function spaceX(){
    
    if(bitcoin >= autoUpgrades.spacex.cost){
        bitcoin -= autoUpgrades.spacex.cost
        autoUpgrades.spacex.quantity ++
        autoUpgrades.spacex.cost *= 5
        //autoUpgrades.spacex.generator *= 2
        genMultiplier += autoUpgrades.spacex.generator
        console.log(genMultiplier)
        setInterval(mine, 3000)
        //console.log(bitcoin)
        draw()
    } else {
        alert("Not enough")
    }
    
}

// function mine(){
//     for (let key in items) {
//         let item = items[key]
//         let newCost = item.generator * item.quantity
//         bitcoin += newCost
//     }
//     draw()
// }
function draw(){
    document.getElementById("currentBitcoins").innerHTML = `Bit Coins: ${bitcoin}`
    document.getElementById("wallstreet-q").innerHTML = `Quantity: ${upgrades.wallstreet.quantity}`
    document.getElementById("elonQ").innerHTML = `Quantity: ${upgrades.elon.quantity}`
    document.getElementById("rhQ").innerHTML = `Quantity: ${upgrades.robinhood.quantity}`
    document.getElementById("spacexQ").innerHTML = `Quantity: ${autoUpgrades.spacex.quantity}`

    document.getElementById("wallstreetCost").innerHTML = `Cost: ${upgrades.wallstreet.cost}`
    document.getElementById("elonCost").innerHTML = `Cost: ${upgrades.elon.cost}`
    document.getElementById("robinhoodCost").innerHTML = `Cost: ${upgrades.robinhood.cost}`
    document.getElementById("spacexCost").innerHTML = `Cost: ${autoUpgrades.spacex.cost}`

    document.getElementById("wallstreetGen").innerHTML = `BitCoin Generator: ${upgrades.wallstreet.generator}`
    document.getElementById("elonGen").innerHTML = `BitCoin Generator: ${upgrades.elon.generator}`
    document.getElementById("robinhoodGen").innerHTML = `BitCoin Generator: ${upgrades.robinhood.generator}`
    document.getElementById("spacexGen").innerHTML = `BitCoin Generator: ${autoUpgrades.spacex.generator}`

}
draw()