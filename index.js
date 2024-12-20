/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert")
const input = document.getElementById("unit")
const conversions = document.getElementById("page-container")
render(0)

convertBtn.addEventListener("click", function(){
   render(input.value) 
})

function render(quantity) {

    let html = `            
        <div class="conv-container">
            <h2 class="unit-title">Length (Meter/Feet)</h2>
            <p>${quantity} meters = ${convertLength(quantity, "meters")} feet | ${quantity} feet = ${convertLength(quantity, "feet")} meters</p>
        </div>
        <div class="conv-container">
            <h2 class="unit-title">Volume (Liters/Gallons)</h2>
            <p>${quantity} liters = ${convertVolume(quantity, "liters")} gallons | ${quantity} gallons = ${convertVolume(quantity, "gallons")} liters</p>
        </div>
        <div class="conv-container">
            <h2 class="unit-title">Mass (Kilograms/Pounds)</h3>
            <p>${quantity} kilos = ${convertMass(quantity, "kilos")} pounds | ${quantity} pounds = ${convertMass(quantity, "pounds")} kilos</p>
        </div>
    `
   conversions.innerHTML = html 
}


function convertLength(quantity, unit) {
    if (unit === "meters") {
        quantity *= 3.281
    }
    else {
        quantity /= 3.281
    }

    return quantity.toFixed(3)
}

function convertVolume(quantity, unit) {
    if (unit === "liters") {
        quantity *= 0.264        
    }
    else {
        quantity /= 0.264
    }

    return quantity.toFixed(3)
}

function convertMass(quantity, unit) {
    if (unit === "kilos") {
        quantity *= 2.204
    }
    else {
        quantity /= 2.204
    }

    return quantity.toFixed(3)
}

