//counting function
function count_To_Thirty() {
    var Digit="";
    var X=1;
    while(X<31) {
        Digit+="<br>"+X;
        X++;
    }
    document.getElementById("Counting_to_Thirty").innerHTML=Digit;
}

//number of characters in a string
function String_Bean() {
    const text="What up the World?";
    document.getElementById("long_string").innerHTML=text.length;;
}

//list function
var Pooches=["Travis","Murphey","Olive","Brenda","Debbie","Susan"];
var content="";
var D;
function All_Dogs() {
    for (Y=0;Y<Pooches.length;Y++) {
    content += Pooches[Y]+"<br>";
    }
    document.getElementById("Doggie").innerHTML=content;
}

//using an array
function more_stuff() {
    var stuff_and_things=[];
    stuff_and_things[0]="this one";
    stuff_and_things[1]="Awesome!";
    stuff_and_things[2]="and another";
    stuff_and_things[3]="one more";
    stuff_and_things[4]="last one";
    document.getElementById("stuff").innerHTML="Alright!<br>"+stuff_and_things[1]+"&#128077;";    
}

//using a constant
function constant_function() {
    const This="Always";
    const These=[];
    These[0]="some things "
    These[1]="That's a constant."
    These[2]="never change."  
    document.getElementById("Constant").innerHTML=This+" and forever!<br>"+These[0]+These[2]+"<br>"+
    These[1];
}

//using let to change a variable
var A= 10;
document.write(A); {
    let A="assignment";
    document.write("<br>"+A);
}  

//return function
function pizza(name) {
    return "yummy"+name;
}
document.getElementById("pepperoni").innerHTML=pizza("&#127829;");

//object
let dog= {
    breed:"Maltipoo",
    name:"Murphey",
    year:"2015",
    color:"White",
    description: function() {
        return this.name+" is a "+this.color+" "+this.breed+" born in 2015";
     }
};
document.getElementById("murph").innerHTML= dog.description();

//break & continue
const beer=["Pacifico ","Corona, ","Modelo, ","Tecate, ","Pabst, ","Miller, ","Budweiser, "];
let text="";

list: {
    text += beer[0];+"<br>";
    text += beer[1];+"<br>";
    text += beer[2];+"<br>";       
    text += beer[3];+"<br>";
    break list;
    text += beer[4];+"<br>";
    text += beer[5];+"<br>";    
    text += beer[6];+"<br>";
}
document.getElementById("cervesa").innerHTML=text;

let word="";
for (let i=0; i<5; i++) {
    if(i===4) {continue;}
    word += "#"+i+", ";
}
document.getElementById("skip").innerHTML=word;


