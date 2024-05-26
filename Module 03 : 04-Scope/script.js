// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
var shout = "Shout";

function justShout() {
  console.log(shout + ', ' + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + ' it all out! ');
  return;
}

justShout();
shoutItAllOut();



// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
    var animal = 'Lions';
    console.log(animal);
    return;
    }
    
    function sayTigers() {
    var animal = "Tigers";
    console.log('and ' + animal + ' and ');
    return;
    }
    
    sayTigers();