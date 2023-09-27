let num=prompt("enter the number");
// let num=13
let sum=0,temp,rem;
temp=num;
console.log(temp);
document.write(`Given number is : ${num} <br><br>`)
while(sum!=1 && sum!=4){
  sum=0
  console.log(sum);
  while(temp!=0){
    rem=temp%10;
    console.log(rem);
    sum=sum+rem*rem;
    console.log(sum);
    temp=parseInt(temp/10);
    console.log(temp);
  }
  temp=sum
  console.log(temp);

  
}

if(sum==1){
  document.write(`${num} is a happy number`)
}
else{
  document.write(`${num} is not a happy number `)
}



