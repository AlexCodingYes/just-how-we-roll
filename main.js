/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

// reset();
//reset button
let resetButton = document.querySelector('#reset-button');

//d6-roll
let imageD6 = document.querySelector('#d6-roll');
let meanD6 = document.querySelector('#d6-rolls-mean');

//double-d6-roll-1
//double-d6-roll-2
let imageDouble1 = document.querySelector('#double-d6-roll-1');
let imageDouble2 = document.querySelector('#double-d6-roll-2');
let meanDouble = document.querySelector('#double-d6-rolls-mean');

//twelve roll
let imageD12 = document.querySelector('#d12-roll');
let meanD12 = document.querySelector('#d12-rolls-mean');

//twenty roll
let imageD20 = document.querySelector('#d20-roll');
let meanD20 = document.querySelector('#d20-rolls-mean');
/*******************
 * EVENT LISTENERS *
 *******************/
imageD6.addEventListener('click', function(){
    console.log("D6 clicked!");
    d6RollFunction();
})

//double-d6-roll-2
imageDouble1.addEventListener('click', function(){
    console.log("Double D6-1 clicked!");
    doubleRollFunction();
})

imageDouble2.addEventListener('click', function(){
    console.log('Double D6-2 clicked!');
    doubleRollFunction();
})

imageD12.addEventListener('click', function(){
    console.log('D12 clicked!');
    d12RollFunction();
})

imageD20.addEventListener('click', function(){
    console.log('D20 clicked!');
    d20RollFunction();
})

resetButton.addEventListener('click', function(){
    console.log('Reset clicked!');
    reset();
})


//------------

/******************
 * RESET FUNCTION *
 ******************/
function reset(){
    //empty global arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    //reset images
    //images/start/d20.jpg
    imageD6.src = "./images/start/d6.png";
    imageDouble1.src = "./images/d6/6.png";
    imageDouble2.src = "./images/d6/6.png";
    imageD12.src = "./images/start/d12.jpeg";
    imageD20.src = "./images/start/d20.jpg";

    //change text
    meanD6.innerText = "N/A"
    meanDouble.innerText = "N/A"
    meanD12.innerText = "N/A"
    meanD20.innerText = "N/A"
}
reset();

// function reset1(){
// doubleSixes = [];
// imageDouble1.src = "./images/d6/6.png";
// imageDouble2.src = "./images/d6/6.png";

// meanDouble.innerText = "N/A"
// }
// reset1();

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);

    imageD6.src =`./images/d6/${result}.png`

//     if(result === 1){
//         imageD6.src = "images/d6/1.png"

// } else if()

sixes.push(result);

console.log(sixes);

meanD6.innerText = getMean(sixes);
}

//doubleRollFunction
function doubleRollFunction(){
    let result = getRandomNumber(6);
    let result1 = getRandomNumber(6);
    console.log(result + result1);

    imageDouble1.src = `./images/d6/${result}.png`
    imageDouble2.src = `./images/d6/${result1}.png`

    doubleSixes.push(result + result1);
    

    console.log(doubleSixes)

    meanDouble.innerText = getMean(doubleSixes);
}
//images/numbers/12.png
//d12RollFunction
function d12RollFunction(){
    let result = getRandomNumber(12);
    console.log(result);
    imageD12.src = `./images/numbers/${result}.png`
    twelves.push(result);
    meanD12.innerText = getMean(twelves);
    console.log(twelves);
}
//d20roll function
function d20RollFunction(){
    let result = getRandomNumber(20);
    console.log(result);
    imageD20.src = `./images/numbers/${result}.png`
    //images/numbers/20.png
    twenties.push(result);
    meanD20.innerText = getMean(twenties);
    console.log(twenties);
}

/****************
 * MATH SECTION *
 ****************/
function getMean(array){

    let total = 0;

    for(let i = 0; i < array.length; i++){
        total = total + array[i];
    }

    return total/array.length;

}

