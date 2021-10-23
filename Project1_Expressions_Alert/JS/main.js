var B="Poppin' Up!";        //this is a variable I'm using for a window alert

alert(B);                   //this is a pop-up window

alert("Coming in hot!");    //this isn another pop-up window

window.alert("AHHHHHHHHHH!");   //this is a pop-up winow using a different approach

var A="this is a string, neat!"; //this is a variable I'm using for a string

var C=(" \"Be who you are and say what you feel, "  //this is another variable I'm using for a string shoing ho to use punctuation
+"because those who mind don\'t matter\, "
+"and those who matter don\'t mind\""
+"-Dr\. Suess"), C=C.fontcolor("pink"); //the text on this string is going to be pink now


document.write([3+3]*111);  //this is to test a function

document.write(C);  //another string for practice

var fam="the Coy\'s", ma="Jena", pa="Alex", s="Travis", ss="Murphey", d="Olive", dd="Brenda", ddd="Debbie", dddd="Susan";   //this is my family as variables, each assigned a different color
var fam=fam.fontcolor("forrestgreen");
var ma=ma.fontcolor("tomato");
var pa=pa.fontcolor("teal"), s=s.fontcolor("blue"), ss=ss.fontcolor("red"), d=d.fontcolor("olive"), dd=dd.fontcolor("lavender"), ddd=ddd.fontcolor("indigo"), dddd=dddd.fontcolor("skyblue");

document.write(ddd, dddd, s);       //this is parts of the previous variable in action

function displayDate() {
    document.getElementById("demo") .innerHTML = Date();
}

