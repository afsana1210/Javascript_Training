const job={
    position:"cashier",
    type:"hourly",
    isAvailable:true,
    showDetails(){
        const accepting=this.isAvailable ?"is accepting application ":"is not currently accepted";
        console.log(`the ${this.position} position is ${this.type}  and ${accepting} `);
    }
};
const key=Object.keys(job);
console.log(key);