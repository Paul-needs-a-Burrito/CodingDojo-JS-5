// 1) Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num) {
    var sum = 0;
    if (num <= 0) {
        return "The number must be a positive integer."
    }

    else {
        for (x = num; x >= 0; x--) {
            sum += x;
        }
        return sum;
    }
}
console.log(sigma(3));

// 2) Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num) {
    var product = 1;
    if (num <= 0) {
        return "The number must be a positive integer."
    }

    else {
        for (x = 1; x <= num; x++) {
            product *= x;
        }
        return product;
    }
}
console.log(factorial(5));

// 3) Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacci(num) {
    var fib0 = 0;
    var fib1 = 1;

    for (x = 1; x <= num; x++) {
        //console.log(fib0);
        var fibSum = fib0 + fib1;
        fib0 = fib1;
        fib1 = fibSum;
    }
    return fib0;
}
console.log(fibonacci(7));
//0, 1, 1, 2, 3, 5, 8, 13, 21...

// The below code also works but it does not make sense to my brain
// function fibonacci(num){
//     var fib0 = 0
//     var fib1 = 1;

//     for (var x = 1; x <= num; x++){
//         temp = fib0;
//         fib0 = fib0 + fib1;
//         fib1 = temp;
//     }
//     return fib0;
// }
// console.log(fibonacci(7));

//Fibonacci Recursion
function fib(num) {
    if( num == 0 || num == 1) {
        return num;
    }
    return ( fib(num - 2) + fib(num - 1) );
}
console.log(fib(7));

// 4) Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondToLast(arr) {
    if (arr.length < 2) {
        return null;
    }
    return arr[arr.length - 2];
}
console.log( secondToLast( [42, true, 4, "Liam", 7] ) );

// 5) Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthToLast(arr, n) {
    if(n > arr.length) {
        return null;
    }
    return arr[arr.length - n];
}
console.log( nthToLast( [5,2,3,6,4,9,7] ,3 )) ;

// 6) Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr) {
    if(arr.length < 2) {
        return null;
    }

    var max = [0];
    var secondMax = [0];

    for(let x = 0; x < arr.length; x++) {
        if(max < arr[x]) {
            max = arr[x];
        }

        else if(secondMax < arr[x] && secondMax != max) {
            secondMax = arr[x];
        }
    }
    return secondMax;
}
console.log( secondLargest( [42,1,4,3.14,7] ) );

// 7) Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleTrouble(arr) {
    for(let i = (arr.length - 1); i >= 0; i--) {
        arr[i * 2] = arr[i];
        arr[i * 2 + 1] = arr[i];
    }
    return arr;
}
console.log( doubleTrouble( [ 4, "Ulysses", 42, false ] ) );
