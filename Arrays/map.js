const numbers=[1,-1,2,3];
const filtered=numbers.filter(n => n >= 0);
const item=filtered.map(n => '<li>' +n +'<li>');
//const html="<ul>"+item.join('')+"<ul>";
//console.log(html);

const items=filtered.map(n=> ({value : n}));
//     const obj={
//         value : n
//     };
//     return obj;
// });
console.log(items);

//filter and map return new array they don;t modify the original array.these methods are chainable i.e out of filtered is input of map.
//numbers.filter(n => n >= 0).map(n => ({value:n}) )
//or
/*numbers
.filter(n => n >= 0)
.map(n => ({value:n})) */