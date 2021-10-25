document.write("4"+20);

document.write(42*10==210+210);   //using == operator to get a "true"  and a "false"
document.write(7==10-2);

console.log(333+333);  //utilizing the console
console.log(2<1);

window.alert(2E310) // going to "infinity"
alert(55>23)

window.alert(-2E310) // going to negative "infinity"
alert(55<23)


function my_function() {
    var Face={
        Expression:"&#128520;",    // creating a function to display the devil face
    };
    document.getElementById("expression").innerHTML=Face.Expression;
}

function my_Function() {
    document.getElementById("Test").innerHTML=isNaN("This is a string");    // using comparisons to get true/ false responces
}

function False() {
    document.getElementById("Quiz").innerHTML=isNaN("42");
}

function Bool() {  // exersize using the === operator
    A="ten";
    a=10;
    B="diez";
    b=10;
    C=1;
    document.getElementById("Bo").innerHTML=(a===b);
    document.getElementById("oo").innerHTML=(C===A);
    document.getElementById("Boo").innerHTML=(A===b);
    document.getElementById("B").innerHTML=(A===B);
}

function comp() {   // exersize using && and || operators
    var A=(15<20&&20>15);
    var B=(15>20||15<20);
    document.getElementById("A").innerHTML=A;
    document.getElementById("b").innerHTML=B;
}

function Not() {
    document.getElementById("no").innerHTML=!(33>32);
}

function NotNot() {
    document.getElementById("hmm").innerHTML=!(33>34);
}

