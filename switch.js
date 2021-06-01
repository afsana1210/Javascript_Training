switch(new Date().getDay()){
    case 0:
        day="sunday";break;
    case 1:
        day="Monday";break;
    case 2:
         day="Tuesday";break;
    case 3:
        day="Wednesday";break;
    case 4:
        day="Thursday";break;
    case 5:
         day="friday";break;
    case 6:
        day="saturday";break;
}
console.log("Today is "+ day);

switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text);

  switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text);

  var x = "0";
  switch (x) {
    case 0:
      text = "Off";
      break;
    case 1:
      text = "On";
      break;
    default:
      text = "No value found";
  }
  console.log(text);//No value found