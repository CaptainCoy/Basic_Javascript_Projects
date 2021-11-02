function full_sen() {          //concatenate example
    var p1="This looks like ";
    var p2="a normal ";
    var p3="sentence, but, ";
    var p4="it's a bunch of ";
    var p5="parts put together";
    var p6=" using the CONCAT method.";
    var Full=p1.concat(p1,p2,p3,p4,p5,p6);
    document.getElementById("Conca").innerHTML=Full;
}

function slice_meth() {  //slice method
    var Sentence="This is cool but seems like a lot of work for something to just display a small portion";
    var section=Sentence.slice(8,12).toUpperCase();
    document.getElementById("Slice").innerHTML=section;
}

function findit() {
    var str="Utilizing the search method to find certain parts of a string.";
    document.getElementById("finder").innerHTML=str.search("method");
}

function string_num(){ //number string example
    var X=42;
    document.getElementById("num_string").innerHTML=X.toString();
}

function Pre_Meth(){  //precision method
    var X=123245.8135471455002243;
    document.getElementById("precisly").innerHTML=X.toPrecision(12);
}

function fixer(){    // toFixed example
    var num=1031.198599999999999;
    var n=num.toFixed(4);
    document.getElementById("fix").innerHTML=n;
}

function of_value(){  // valueOf example
    var str="Look at this!";
    document.getElementById("tha_value").innerHTML=str.valueOf();
}