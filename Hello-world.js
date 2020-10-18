function name(firstName, surname) {
    var fullname = (firstName + surname);
    return fullname;
}
console.log(name("Hello world", " it's Jowita!"));

console.log("This is JavaScript saying it's now");


function callableObj()
{
    var callableName = "Jowita Karbownik";
    
    return callableName;
}
console.log(callableObj());


function coffeeMake(sugar, milk) {
	var instructions = "Pour water into the coffee maker,";
	instructions += " add blended coffee into the coffee holder,";
	instructions += " brew coffee on the stowe,";
	instructions += " pour into a cup,";
	instructions += " add " + sugar + " spoons of sugar,";
	instructions += " and add " + milk + " % of milk. ";
	return instructions;
}
console.log(coffeeMake(0, 0));

var courtains = {
	color: "dark grey",
	make: "IKEA",
	size: ["width:1,45 m", "lenght:3 m"]
};

var pieczywo = {
    bulki:["kajzerka", "grahamka", "poranna"], 
    chleb:["żytni", "razowy", "ciabata"], 
    pieczywoPlaskie: ["tortilla", "roti", "pita", "chapati"]
};

const products = [1, 2, 3, 4];
