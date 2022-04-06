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
