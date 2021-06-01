//var car=["volvo","Toyota"];if var is defined first array then const with sane array gives error;
const car=["volvo","BMW"];
//var car=["toyota","volvo"];//SyntaxError: Identifier 'car' has already been declared

console.log(car);
{
    const car=["volvo","BMW"];
    console.log(car);
}