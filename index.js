function num(){
    return 3 + 5;
}

(mylist) => {
    return thingsToDo;
}

let x =2
let y = 10
function (x ,y ){
    return x + y + 10;
}
const nums = [12,5,3];
const squares = nums.map(x => x ** 2); 
squares; //=> [144,25,9]
nums; //=> [1,2,3] 

function boilWater(water,pasta, pot){
    console.log("We are going to boil" + water + "ounces of water with" + "in a" pot + "ounce pot");
}
function setLocation(city){
    let country = "United States";

    function printLocation(){
        console.log("You are in" + city  ","  + country);

    }
    return printLocation;
}
