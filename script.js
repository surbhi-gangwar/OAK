function show(){
const menu=document.querySelector(".menu-bar");
menu.style.width="550px";
menu.style.right=0;
}

function Hide(){
   const menuhide= document.querySelector(".menu-bar");
   const inputBox = document.querySelector("#input-box");
   const circle = document.querySelector(".circle");
   const bottomLine = document.querySelector(".bottom-line");
   const topLine = document.querySelector(".top-line");
   menuhide.style.width=0;
   menuhide.style.right="-80px";
   circle.style.opacity = "1";
   inputBox.style.width = "0";
   inputBox.style.opacity = "0";
   topLine.style.opacity = "0";
   bottomLine.style.top = "39px";
   bottomLine.style.right = "4px";
   inputBox.style.transition = "all 0.5s";
   circle.style.transition = "all 0.5s";
   bottomLine.style.transition = "all 0.5s";
   topLine.style.transition = "all 0.5s";

}
const imgArray = ["./images/background1.webp",
"./images/background2.jpg",
"./images/background3.jpg"];
 var imgIndex = 0;

function fun1(){
       
       document.getElementById("main-img").src= imgArray[imgIndex]; 
 }

 function updateIndexAndImage(){
    if(imgIndex>=2){
      imgIndex = 0;
    }
    else{
      imgIndex++;
    }
    fun1();
 }
 
 setInterval(updateIndexAndImage,5000);
 
 var toggle1 = true;

 function slide(){
  const slideBox = document.querySelector(".slide-box");
  
  if(toggle1){
    slideBox.style.left="100px";
  }
  else{
    slideBox.style.left="-554px";
    
  }
  toggle1 = !toggle1;
 }

 var toggle2 = true;

 function fxn2(){
  const circle = document.querySelector(".circle");
  const bottomLine = document.querySelector(".bottom-line");
  const topLine = document.querySelector(".top-line");
  const inputBox = document.querySelector("#input-box");
  if(toggle2){
    circle.style.opacity = "0";
    inputBox.style.width = "280px";
    inputBox.style.opacity = "1";
    bottomLine.style.top = "6px";
    bottomLine.style.right = "16px";
    topLine.style.opacity = "1";
    topLine.style.top = "5px";
    topLine.style.right = "16px";
    inputBox.style.transition = "width 0.5s";
    bottomLine.style.transition = "all 0.5s";
    topLine.style.transition = "all 0.5s";
    circle.style.transition = "all 0.5s";
  }
  else{
    circle.style.opacity = "1";
    inputBox.style.width = "0";
    inputBox.style.opacity = "0";
    topLine.style.opacity = "0";
    bottomLine.style.top = "39px";
    bottomLine.style.right = "4px";
    inputBox.style.transition = "all 0.5s";
    circle.style.transition = "all 0.5s";
    bottomLine.style.transition = "all 0.5s";
    topLine.style.transition = "all 0.5s";
  }
   toggle2 = !toggle2;
 }

var arr = ["AWESOME THEME","MODERN COMBINATION","CREATIVE SOLUTION"];
var i=1;
var j=2;  

function fxn3(){
  if(i==2){
    changingText = document.querySelector(".bg-changing-text");
    changingText.innerHTML = arr[i];
    i=0;
  }
  else{
    changingText = document.querySelector(".bg-changing-text");
    changingText.innerHTML = arr[i];
    i++;
  }
}
setInterval(fxn3,4700);
  