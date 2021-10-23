function addition_function() {
    let x=2;
    let y=2;
    var addition=2+2;
    document.getElementById("Math").innerHTML=addition;
}

function subtraction_function() {
    let x=5;
    let y=2;
    var subtraction=5-2;
    document.getElementById("Sub").innerHTML=subtraction;
}

function multiplication_function() {
    let x=6
    let y=8
    let z=x*y;
    document.getElementById("Mult").innerHTML=z;
}

function division() {
    let x=48
    let y=6
    var division= 48/6;
    document.getElementById("Divi").innerHTML=division;
}

function lots_happening() {
    var lots=(4+430)*4/4-14;
    document.getElementById("more").innerHTML=lots;
}

function mod_Op() {
    var simple_Math=25 % 6;
    document.getElementById("Mod").innerHTML="When 25 is divided by 6 you have 24 with a remainder of: "+simple_Math;
}

function neg_Op() {
    var x=10;
    document.getElementById("Neg").innerHTML=-x;
}

function increase() {
        var X=42;
        document.getElementById("text").innerHTML=++X;
}

window.alert(Math.random()*1000);
window.alert(Math.round(41.75));
        
    