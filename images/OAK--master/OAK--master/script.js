function fxn3()
{
    document.getElementById("navbar").style.right=0;
}
function fxn4()
{
    document.getElementById("navbar").style.right=-510;
    
            document.getElementById("searchbox").style.width=0;
    
            document.getElementById("searchbox").style.opacity=0;
            document.getElementById("linex").style.top=34;
            document.getElementById("linex").style.right=6;
            document.getElementById("liney").style.top=3;
            document.getElementById("liney").style.right=5;
    
            document.getElementById("liney").style.opacity=0;
            
            btn="open";
}
var btn = "open";
function fxn5(){
    
    if(btn=="open")
        {
            
            document.getElementById("searchbox").style.width=250;
    
            document.getElementById("searchbox").style.opacity=1;
            document.getElementById("linex").style.top=17;
            document.getElementById("linex").style.right=20;
            document.getElementById("liney").style.top=17;
            document.getElementById("liney").style.right=20;
    
            document.getElementById("liney").style.opacity=1;
            
            document.getElementById("circle").style.opacity=0;
            
            btn="close";
        }
    
    else if(btn=="close")
        
        {
            
            document.getElementById("searchbox").style.width=0;
    
            document.getElementById("searchbox").style.opacity=0;
            document.getElementById("linex").style.top=34;
            document.getElementById("linex").style.right=6;
            document.getElementById("liney").style.top=3;
            document.getElementById("liney").style.right=5;
    
            document.getElementById("liney").style.opacity=0;
            document.getElementById("circle").style.opacity=1;
            
            btn="open";
        }
            
            
}

function fxn6(){
   
    if(btn=="open")
        {
            document.getElementById("abx").style.left=150;
            
            document.getElementById("abx").style.opacity=1;
            
            
            btn="close";
        }
    
    else if(btn=="close")
        
        {
         
             document.getElementById("abx").style.left=-370;
            
            document.getElementById("abx").style.opacity=0;
            
            
            btn="open";
        }
}



var x=["AWESOME THEME","MODERN COMBINATION","CREATIVE SOLUTION"];
var a=1;
var z=2;

setInterval(fxn1,5000);
setInterval(fxn2,7000);
function fxn1()
    {
        if(a==2)
            {
                document.getElementById("text-2").innerHTML=x[a];
                a=0;
            }
        else
            {
                document.getElementById("text-2").innerHTML=x[a];
                a++;
            }
    }
function fxn2()
{
    if(z==5)
        {
            document.getElementById("box2image").src="slider/image_"+z+".jpg";
            z=1;
        }
    else
        {
            document.getElementById("box2image").src="slider/image_"+z+".jpg";
            z++;
        }
}



