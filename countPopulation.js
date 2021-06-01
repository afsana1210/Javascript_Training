let array=[
    {
        "Mahareastra":100
    },
    {
        "abc":200
    }
];
function countPopulation(array){
    let total=0;
    array.map(obj=>{
        let arr=Object.keys(obj);
        total+=obj[arr];
    })
    return total;
}
console.log(countPopulation());