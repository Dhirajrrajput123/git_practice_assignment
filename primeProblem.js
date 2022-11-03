
function checkprime(n){
for (let i=2;i<=n/2;i++){
if (n%i==0){  
  return false;
 } 
}
return true;
}
let num=45
let ans=checkprime(num);
if(ans){
console.log(num," is a prime number");
}
else{
console.log(num," is not a prime number");

}