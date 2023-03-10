// ==================================
// Problem 1: Let’s play a mind game
// ==================================
function mindGame(number) {
    // Input data validation checking;
    if (typeof number == 'number') {
    } else {
        return 'Please! enter a number.';
    }
    // Calculation
    const multiply3 = number * 3;
    const sum10 = multiply3 + 10;
    const divided2 = sum10 / 2;
    const finalResult = divided2 - 5;

    return finalResult;
}




// ===============================
// Problem 2: Finding even or odd
// ===============================
function evenOdd(string) {
    let result = '';
    // if you input the wrong type of variable, it will show an alert message.
    if (typeof string === 'string') {
        if (string.length % 2 === 0) {
            result = 'even';
        } else {
            result = 'odd';
        }
    } else {
        return 'Please! enter a string.';
    }
    return result;
}


// =========================================
// Problem 3: Is Less or Greater than seven
// =========================================
function isLGSeven(number) {
    let x = 0;
    let deference = number - 7;
    // if you input the wrong type of variable, it will show an alert message.
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



// ===============================
// Problem 4: Finding Bad data
// ===============================
function findingBadData(array) {
    let count = 0;
    // if you input the wrong type of variable, it will show an alert message.
    if (Array.isArray(array) === true) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                count++;
            }
        }
    } else {
        return 'Please! Input an array.';
    }
    return count;
}



// =========================================
// Problem 5: Convert your gems into diamond
// =========================================
function gemsToDiamond(num1, num2, num3) {

    let output = 0;
    firstFriendGems = num1 * 21;
    secondFriendGems = num2 * 32;
    thirdFriendGems = num3 * 43;
    output = firstFriendGems + secondFriendGems + thirdFriendGems;

    // if you input the wrong type of variable, it will show an alert message.
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        if (output > 1000 * 2) {
            return output - 2000;
        } else {
            return output;
        }
    } else {
        return 'Please! input all valid numbers. Do not use other types of variables.';
    }
}