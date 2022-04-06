function show(){
const menu=document.querySelector(".menu-bar");
menu.style.width="550px";
menu.style.right=0;
}

function Hide(){
   const menuhide= document.querySelector(".menu-bar");
   menuhide.style.width=0;
   menuhide.style.right="-80px";
}

 const imgArray = ["./images/background1.webp",
 "./images/background2.webp",
 "./images/background3.webp"]

function fun1(){
   for(let i=0;i<3;i++){
       document.getElementByClassName("main-img").src= imgArray[i];
    }
 }
