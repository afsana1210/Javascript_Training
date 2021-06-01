const circle={
    radius:1,
    draw(){
        console.log("draw");
    }
};
const another={};
for(let key in circle){
    another[key]=circle[key];
}
console.log(another);

const anotherapproach=Object.assign({},circle);
console.log(anotherapproach);

const simpleapproach={...circle};//spread operator iterate object into individual element
console.log(simpleapproach);