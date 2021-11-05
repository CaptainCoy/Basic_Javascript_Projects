function count_To_Thirty() {
    var Digit="";
    var X=1;
    while(X<31) {
        Digit+="<br>"+X;
        X++;
    }
    document.getElementById("Counting_to_Thirty").innerHTML=Digit;
}

function String_Bean() {
    const text="What up the World?";
    document.getElementById("long_string").innerHTML=text.length;;
}

var Pooches=["Travis","Murphey","Olive","Brenda","Debbie","Susan"];
var content="";
var Y;
function All_Dogs() {
    for (Y=0;Y<Pooches.length;Y++) {
    Content += Pooches[Y]+"<br>";
    }
    document.getElementById("Doggie").innerHTML=Content;
}