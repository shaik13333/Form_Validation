let username = document.getElementById("usern");
let password = document.getElementById("pass");
let anchor = document.getElementById("anchor")
function validate(){
    if(username!="" && password!=""){
      anchor.a.innerHTML = "http://127.0.0.1:5500/validation_task/register1.html"
    }
}