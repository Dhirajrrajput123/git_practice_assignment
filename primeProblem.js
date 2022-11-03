
//to  find the number is prime number or not 
let number=19;
let count_of_divisible=0;
fot(let i=1;i<=number;i++){
if(number%i==0){
count_of_divisible++;
}
}
if(count_of_divisible==2){
console.log(number," is a prime number");
}
else{
console.log(number," is not a prime number");

}