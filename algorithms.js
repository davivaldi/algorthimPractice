// print all nums 
function PrintNums(number){
    for( var x = 0; x<number +1; x++){
    console.log(x);
}
}
// PrintNums(25);

//add the sums through num

function AddNums(num){
var sum = 0;
for (var x = 0; x<num+1; x++){
    sum+=x;
}
console.log(sum);
return sum;
}
// AddNums(3);

// Find and Print Max broken************ fixed 12/06 spelling error
function FindMax(arr){
    var max = arr[0];
    console.log(max);
    for(var x = 0; x<arr.length; x++){
        if(arr[x] > max) {
            max = arr[x];
        }
    }
    console.log(max);
}
// arr1= [1,0,5,35,9,80];
// FindMax(arr1);

// Array with Odd #s creates array with only the odd numbers

function ArrayOdd(num){
    var arr=[];
    for(var x=0; x<num; x++){
            if (x %2 !=0){
                arr.push(x);
            }
        }
        console.log(arr);
        return arr;
}
// ArrayOdd(25);

// given an array and a value Y, count and print the number of values greater than Y
function GreaterthanY(arr,y){
    var arr1 = [];
    for( var x=0; x< arr.length;x++){
        if (arr[x]> y){
            arr1.push(arr[x]);
            }
    }
    console.log("These numbers are greater than "+ y +": "+ arr1)
    return arr1;

}

var arr= [13,-21,33,4,-5,6,7,8,9,22,33,-77,23];
// GreaterthanY(arr,21);

// Max,Min, Avg
function MaxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var avg;
    for(var x = 0; x<arr.length; x++){
        if(arr[x] > max) {
            max = arr[x];
        }
        else if (arr[x]< min){
            min = arr[x]
        }
        sum += arr[x];
    }
     avg = sum/arr.length;
    console.log("The max is "+ max+ " The Min is "+ min+ " And the Avg is "+ Math.floor(avg)+"!");
}

// MaxMinAvg(arr);

// Swap negative Nums with Dojo

function SwapNegValues(arr){
    for(var x = 0; x<arr.length; x++){
        if(arr[x]< 0){
            arr[x]= "Dojo";
        }
    }
    console.log(arr);
}
// SwapNegValues(arr);

// Print Odd 1-255
function Odds255(){
    for( var x = 0; x<=255; x++){
        if(x%2 !=0 ){
            console.log(x);
        }
    }
}

// Odds255();

// iterate and Print each number in an array
function iterateAndPrintArray(arr){
    for( var x = 0; x<arr.length; x++){
        console.log(arr[x]);
    }
}

// iterateAndPrintArray(arr);

// function that gets the avg of array
function ArrayAvg(){
    var avg=0;
    var sum=0;

    for( var x = 0; x<arr.length; x++){
        sum+=arr[x];
    }
    avg= sum/arr.length;
    console.log(Math.floor(avg));
    return Math.floor(avg);
}

// ArrayAvg(arr);

// function that squares each value and return the new aray
function SquareValuesArray(arr){
    var arr1=[];

    for( var x = 0; x<arr.length; x++){
        arr[x]= arr[x]*arr[x];
        arr1.push(arr[x]);
    }
    console.log(arr1);
    return arr1;
}
// SquareValuesArray(arr);

// function that zeros out negative numbers in an Array
function ZeroOutNegsArray(arr){
    for(var x = 0; x<arr.length; x++){
        if(arr[x]< 0){
            arr[x]= 0;
        }
    }
    console.log(arr);
    return arr;

}
// ZeroOutNegsArray(arr);

// function that shifts all values forward 1 and zeros the last digit
function ShiftArrayValues(arr){
    for(var x=0; x<arr.length;x++){
        arr[x]= arr[x+1];
    }
    arr[arr.length-1]=0;
    console.log(arr);
    return arr;
}

// ShiftArrayValues(arr);

// fuction that ,given a number will return the sum of all positve numbers
function Sigma(num){
    var sum=0;
    if (num<0){
        return console.log("Parameter must be a positive number");
    }
    for(var x=0; x<=num; x++){
            sum+=x;
    }
    console.log(sum);
    return sum;
}

// Sigma(20);

// function that , given a num will return the product of all nums inclusive
function Factorial(num){
    var sum=1;
    if (num<0){
        return console.log("Parameter must be a positive number");
    }
    for(var x=1; x<=num; x++){
            sum*=x;
    }
    console.log(sum);
    return sum;
}

// Factorial(5);

// function that adds value from 100 and 4000000(inclusive) if value is divisable by three or 5 but not Both
function ThreeFive(){
    var sum =0;
    for(var i=100; i<=4000000;i++){
        if(i%3){
            sum+=i;
        }
        else if (i%5){
            sum+=i;
        }
    }
    console.log(sum);
    return sum;

}
// ThreeFive();

// function that adds value from start and finish(inclusive) if value is divisable by three or 5 but not Both

function BetterThreeFive(start,end){
    var sum =0;
    for(var i=start; i<=end;i++){
        if(i%3){
            sum+=i;
        }
        else if (i%5){
            sum+=i;
        }
    }
    console.log(sum);
    return sum;

}

// BetterThreeFive(2,20);

// function that generates the least amount of coins
function CoinChanger(cents){
    if(cents>0 && cents<=100){
        var quarters = Math.floor(cents/25);
        if(cents>0){
            
            cents = Math.floor(cents%25);
        }
        var dimes = Math.floor(cents/10);
        if(cents>0){

            cents = Math.floor(cents%10);
        }
        var nickels = Math.floor(cents/5);
        if(cents>0){

            cents = Math.floor(cents%5);
        }
        var pennies = Math.floor(cents/1);
        

        
    }
    else console.log("Must have a positive change amount under 100");

    console.log("Quarters "+quarters+" Dimes "+dimes+" "+ "Nickels "+nickels+" "+"Pennies "+pennies);
}

// CoinChanger(65);

// implement a die that randomly retuns an int between 1 and 6 roll a pair of number min max avg
function StatisticDoubles(){
    var die1 = 0;
    var die2 = 3;
    var sum =0;



    // while they dont eql to each other;
     while(die1 != die2){
        die1 = Math.floor((Math.random() * 6) + 1);
        die2 = Math.floor((Math.random() * 6) + 1);
        sum+=1;
        
        if(die1 == die2){

            console.log("It tooke us "+ sum+ "times to have doubles on bith dice.");
            break;
        }
    }
    // keep randomizing untill they do;
    // everytime i randomize add to sum;
    
}

StatisticDoubles();