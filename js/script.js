let tglBtn = document.querySelector(".tglBtn");
let tglBall = document.querySelector(".tglBall");
let checkbox = document.getElementById("ckBox");
function tglBttn() {
    if(checkbox.checked){
        tglBtn.style.background = "#FFFFFF";
        tglBtn.style.border = "2px solid #000";
        tglBall.style.background = "#000";
        tglBall.style.transition = "";
        tglBall.style.left = "21px";
        mP.style.background = "#fff";
        mP.style.color = "#000";
    } else {
        tglBtn.style.background = "";
        tglBall.style.transition = "";
        tglBall.style.left = "";
        tglBtn.style.border = "";
        mP.style.background = "";
        tglBall.style.background = "";
        mP.style.color = ""
    }
} 
const mP = document.querySelector(".mainPage");