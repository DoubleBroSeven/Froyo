// A visitor receives a prompt upon opening the website to enter a list of comma - separated froyo flavors.
//Create Prompt with that allows users to input data seperated by a comma

alert= prompt(`Please enter what flavors you would like!`)

//console.log(alert)

// They type vanilla, vanilla, vanilla, strawberry, coffee, coffee.
//should create a string value,
//will need to seperate string into an array with .split
let UserinputFlavors = alert.split(`,`);

console.log(UserinputFlavors);

let Froyo = {};

for (let index = 0; index < UserinputFlavors.length; index++) {
  let newkey = UserinputFlavors[index];
  if (UserinputFlavors[index] !== UserinputFlavors[index-1]) {
    Froyo[newkey] = 1;
  } else {
    Froyo[newkey]+=1;
  }
}

console.log(Froyo);
