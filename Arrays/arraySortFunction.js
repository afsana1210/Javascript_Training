function sort(arr){
    var len=arr.length;
    var max=-Infinity;
    while(len--){
        if(arr[len]>max){
            max=arr[len];
        }
    }
    return max;
}
var arr=[100,3,45,6,90,2,1,55,66,98,98];

console.log(sort(arr));//100

function sortMinValue(arr){
    var len=arr.length;
    var min=Infinity;
    while(len--){
        if(arr[len]<min){
            min=arr[len];
        }
    }
    return min;
}
console.log(sortMinValue(arr));