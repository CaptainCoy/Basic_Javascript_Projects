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