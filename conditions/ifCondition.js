if(new Date().getHours()<18){
    console.log("Good day");
}else{
    console.log("Good evening");
}

function myfunction(){
    var time=new Date().getHours();
    if(time < 10){
        console.log("good morning");
    }else if(time < 20){
        console.log("good day")
    }else
    {
        console.log("Good evening");
    }
}
myfunction();