function display(result){
    console.log(result);
}
function calculator(num1,num2,mycallback){
    let sum=num1+num2;
    mycallback(sum);
}
calculator(10,20,display);