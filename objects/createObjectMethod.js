const job={
    position:"cashier",
    type:"hourly",
    isAvailable:true,
    showDetails(){
        const accepting=this.isAvailable ?"is accepting application ":"is not currently accepted";
        console.log(`the ${this.position} position is ${this.type}  and ${accepting} `);
    }
};
//use object.create to pass properties
const barista=Object.create(job);
barista.position="barista";

// for(let key in barista){
//     const v=barista[key];
//      console.log("barista values "+ v);
// }
//console.log(barista.showDetails());

// for(let key in job){
//     const v=job[key];
// //    console.log(v);
// }
const k=Object.keys(job);

const v=Object.values(barista);
console.log(v);