var A=12
function Global_var_Example() {
    console.log(30+A);
}
function Local_var_Example() {
    var B=30
    console.log(A+B);
}
Global_var_Example();
Local_var_Example();

function get_time() {
const d = new Date();
document.getElementById("whatsthetime").innerHTML=d;
}

function get_hour() {
    var Time=new Date().getHours();
    var Respond;
    if(Time<12==Time>0){
        Respond="Good Morning";
    }
    else if (Time >=12==Time<18){
        Respond="Good Afternoon";
    }
    else{
        Respond="Good Evening";
    }
    document.getElementById("Greeting").innerHTML=Respond;
}

function Age_Party(){
    Age=document.getElementById("Age").value;
    if(Age>=21){
        Party="Party!";
    }
    else{
        Party="Denied";
    }
    document.getElementById("party").innerHTML=Party;
}