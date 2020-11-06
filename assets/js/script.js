let greenCount = 0;
let blueCount = 0;


function greenAdd(greenScore, greenButtonId) {
    console.log(greenButtonId)
    document.querySelector(greenButtonId).addEventListener("click", e => {
        greenCount = greenCount + greenScore;
        document.querySelector("#counterGreen").innerHTML = greenCount;
    });
}

greenAdd(1, "#addOneGreen");
greenAdd(2, "#addTwoGreen");
greenAdd(3, "#addThreeGreen");


function blueAdd(blueScore, blueButtonId) {
    console.log(blueButtonId)
    document.querySelector(blueButtonId).addEventListener("click", e => {
        blueCount = blueCount + blueScore;
        document.querySelector("#counterBlue").innerHTML = blueCount;
    });
}

blueAdd(1, "#addOneBlue");
blueAdd(2, "#addTwoBlue");
blueAdd(3, "#addThreeBlue"); 

document.querySelector("#reset").addEventListener("click", e => {
    document.querySelector("#counterGreen").innerHTML = greenCount = 0;
    document.querySelector("#counterBlue").innerHTML = blueCount = 0;
});

