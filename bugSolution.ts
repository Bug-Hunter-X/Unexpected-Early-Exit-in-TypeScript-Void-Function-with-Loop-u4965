function printNumbersCorrected(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbersCorrected(5); //This will print 1,2,3,4,5

//Alternative solution using a while loop if you need to handle early exit conditions more gracefully
function printNumbersWhile(n:number):void{
  let i = 1;
  while(i <=n){
    console.log(i);
    i++;
  }
}
printNumbersWhile(5)