const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const  handleSuccess=(resolvedValue)=>{
  console.log(resolvedValue);
};
const handleFailure=(rejectionValue)=>{
  console.log(rejectionValue);
};
checkInventory(order).then(handleSuccess,handleFailure);
//catch method is used for failure handlerlike it chain with then()
//eg checkInventory(order).then(handleSuccess).catch(handleFailure)