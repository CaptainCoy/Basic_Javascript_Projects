function Ride_Function() {
    var Height, Can_Ride;
    Height=document.getElementById("Height").value;
    Can_Ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_Ride+" to ride.";
}

function Voter() {
    var Age, Can_Vote;
    Age=document.getElementById("Age").value;
    Can_Vote=(Age<18)?"You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_Vote+" to vote!";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Han=new Vehicle("Corellean", "Millenium Falcon", 1979, "Grey");
var Vader=new Vehicle("Empirial", "Tie Fighter", 1980, "Blue/ Black");
var Luke=new Vehicle("Rebel", "X-Wing", 1978, "Grey/ Red");
var Fett=new Vehicle("Mandolor", "Slave1", 1982, "Green/ Grey");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Han drives a "+Han.Vehicle_Color+" "+Han.Vehicle_Model+
    " manufactured in "+Han.Vehicle_Year;
}

function Dog(Breed, Color, Age, Status) {
    this.Dog_Breed=Breed;
    this.Dog_Color=Color;
    this.Dog_Age=Age;
    this.Dog_Status=Status;
}
var constructorhere=new Dog("mutt", "red","44","bad dog");  
var Olive=new Dog("Poodle", "Cream", 3, "good girl");
var Brenda=new Dog("Poodle", "Brown/ Whiteish Phantom", 1, "Canine Good Citizen");
var Debbie=new Dog("Poodle", "Black/ Tan Phantom", 1, "Clever Girl");
var Susan=new Dog("Poodle", "White/ Brown Parti", 1, "Wild Girl");
function New() {
    document.getElementById("New_and_This").innerHTML="Olive is a "+Olive_Status;
}
