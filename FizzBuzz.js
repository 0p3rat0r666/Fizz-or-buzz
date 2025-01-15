// fizz buzz game
var n = 1;
// if statement to check the variable and print accordingly
while(n<=100){
  if(n % 3 === 0 && n % 5 === 0){
    console.log("fizz buzz");
    n = n + 1;
  }else if(n % 3 === 0 && n % 5 != 0){
    console.log("fizz");
    n = n + 1;
  }else if(n % 3 != 0 && n % 5 === 0){
    console.log("buzz");
    n = n + 1;
  }else{
    console.log(n);
    n = n + 1;
  }
}
