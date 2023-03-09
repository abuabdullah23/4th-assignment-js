// ==================================
// Problem 1: Let’s play a mind game
// ==================================
function mindGame(number) {
    // Input data validation checking;
    if (typeof number == 'number') {
    } else {
        return 'Please! enter number.'
    }
    // Calculation
    const multiply3 = number * 3;
    const sum10 = multiply3 + 10;
    const divided2 = sum10 / 2;
    const finalResult = divided2 - 5;

    return finalResult;
}
const result = mindGame(2);
console.log(result);




// ===============================
// Problem 2: Finding even or odd
// ===============================
function evenOdd(string) {
    let result = '';
    if (typeof string === 'string') {
        if (string.length % 2 === 0) {
            result = 'even';
        } else {
            result = 'odd';
        }
    } else {
        return 'Please! enter string.'
    }
    return result;
}
const myString = evenOdd(4);
console.log(myString);





// =========================================
// Problem 3: Is Less or Greater than seven
// =========================================
function isLGSeven(number) {
    let x = 0;
    let deference = number - 7;
    if (typeof number == 'number') {
        if (deference < 7) {
            x = deference;
        } else if (deference > 7) {
            x = number * 2;
        }
    } else {
        return 'Error! Please enter a number';
    }
    return x;
}
const myNumber = isLGSeven(6);
console.log(myNumber);




// ===============================
// Problem 4: Finding Bad data
// ===============================
function findingBadData(array) {
    let count = 0;
    if (Array.isArray(array) === true) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                count++;
            }
        }
    } else {
        return 'Please! Input an array.'
    }
    return count;
}
let inputArray = [-4, -9, -5, -33, -55];
const myArray = findingBadData(inputArray);
console.log(myArray);



// =========================================
// Problem 5: Convert your gems into diamond
// =========================================
function gemsToDiamond(num1, num2, num3) {

    let output = 0;
    firstFriendGems = num1 * 21;
    secondFriendGems = num2 * 32;
    thirdFriendGems = num3 * 43;
    output = firstFriendGems + secondFriendGems + thirdFriendGems;

    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        if (output > 1000 * 2) {
            return output - 2000;
        } else {
            return output;
        }
    } else {
        return 'Please! input all valid number. Do not use others type of variable';
    }
}
const friendsNumbers = gemsToDiamond(20, 200, 50);
console.log(friendsNumbers);