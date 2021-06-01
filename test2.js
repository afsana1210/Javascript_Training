function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


let s="abcdabce";
let a=s.split("");
let unique = a.filter(onlyUnique);
console.log(unique.join(""));

const extractunique=arr=>{
    const newarr=[];
    for(let i=0;i<arr.length;i++){
        if(arr.lastIndexOf(arr[i])!=arr.indexOf(arr[i])){
            continue;
        }
        newarr.push(arr[i]);
    }
    return newarr;
};
console.log(extractunique(a));