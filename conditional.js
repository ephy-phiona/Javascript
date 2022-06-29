// Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five print
//"Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

for ( var x = 1; x <= 100; x++ ){
  if ( x%3 === 0 && x%5 === 0 ){
    console.log( x + " FizzBuzz" );
  }
  else if ( x%3 === 0 ) {
    console.log(x+ " Fizz" );
  }
  else if ( x%5 === 0 ) {
    console.log(x+ " Buzz" );
  }
  else{
    console.log(x);
  }
}


var sum = 0;
for (var y = 0; y < 1000; y++){
    if (y % 3 === 0 || y % 5 === 0)
    {
       sum += y;
    }
}
console.log(sum);


for (var w=0; w<=15; w++) {
    if (w === 0) {
            console.log(w +  " is even");
    }
    else if (w % 2 === 0) {
            console.log(w + " is even");   
    }
    else {
            console.log(w + " is odd");
    }
}

let num = [-2, 4,-5, 6,0]
greater=0
for (i=0; i<num.length; i++){
if(num[i]>greater){
  greater+=num[i]
  console.log(greater)
}
}

// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

let sum1=10;
let sum2=40;
if(sum1>sum2){

console.log(sum1)
}
else (sum2>sum1);
console.log(sum2)


for(let year=2000; year<=2022; year++){
  if ((year % 4==0) && (year % 1000 != 0) || (year % 4000 ==0)) {
    console.log(year)
  }
}

