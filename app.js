const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const alert =document.querySelector(".alert");
const black =document.querySelector(".black");


const button =document.querySelector("#submit");
button.addEventListener('click',verify);
function verify(e){
  e.preventDefault();
  if(username.value.length>=8&&password.value.length>=6&&password.value===confirm.value){
    black.innerHTML =`<h2 style="color:green; text-align:center;margin:20px;">! Congratulations !</h2>
    <h1 style="color:white; text-align:center;margin:20px;">We have received your request</h1>
    <p><img src ="astronaut.jpg" style="border-radius:50%; margin:30px"></p>`
   
  }
  else{
    alert.innerHTML ="Please fill fields correctly"
    setTimeout(alertmessage,3000);
  }
  
}
function alertmessage(){
  alert.innerHTML ="";
}