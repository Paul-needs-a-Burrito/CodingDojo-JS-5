// Predict the output of the following code snippets.  Please do NOT run any of this code directly, but first predict the output using the T-diagram.  If you're not used to using the T-diagram to run through the code yet, please get comfortable now.  This will help you down the line.  Once you've predicted the output for all of the codes, then run the code one by one and compare the two.
// Please turn in a text file that includes your prediction for each problem and the actual output. At the top of the file, indicate how many out of 15 you predicted correctly.

// 14 OUT OF 15 CORRECT

// #1 PREDICTION:
35
// ACTUAL:
35

function a(){
    return 35;
}
console.log(a())

// #2 PREDICTION:
8
// ACTUAL:
8

function a(){
    return 4;
}
console.log(a()+a());

// #3 PREDICTION:
6
// ACTUAL:
6

function a(b){
    return b;
}
console.log(a(2)+a(4));

// #4 PREDICTION:
3
9
// ACTUAL:
3
9

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

// #5 PREDICTION:
40
// ACTUAL:
40

function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));

// #6 PREDICTION:
4
// ACTUAL:
4

function a(b){
    if(b<10) {
        return 2;
    }
    else {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// #7 PREDICTION:
10
3
30
// ACTUAL:
10
3
30

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// #8 PREDICTION:
3
4
// ACTUAL:
3
4

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// #9 PREDICTION:
2
5
8
11
// ACTUAL:
2
5
8
11

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// #10 PREDICTION:
0,1,2,3,4,5,6,7,8,9
0,1,2,3,4,5,6,7,8,9
0
// ACTUAL:
0,1,2,3,4,5,6,7,8,9
0
0,1,2,3,4,5,6,7,8,9
0

function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));

// #11 PREDICTION: nothing the function never gets called
// ACTUAL: nothing the function never gets called

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}

// #12 PREDICTION: nothing the function never gets called
// ACTUAL: nothing the function never gets called

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

// #13 PREDICTION:
10
// ACTUAL:
10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

// #14 PREDICTION:
15
10
// ACTUAL:
15
10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

// #15 PREDICTION:
15
15
// ACTUAL:
15
15

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
