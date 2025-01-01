//ex1
var timeoutId;
function timer(){

    timeoutId = setTimeout(() => {
        alert("Time's up!");
    
      }, 5000);

}
function stop(){
    clearTimeout(timeoutId);
}
//ex2
var div1=document.getElementById("div1");
var setIntervalid;
function starttime(){
 

 
    setIntervalid=setInterval(()=>{
        var date1=new Date();
        div1.innerText=date1.toLocaleTimeString();
    },1000);
}
function stoptime(){
clearInterval(setIntervalid);
}//ex3

function scrollDownBtn(){
    setInterval(()=>{
        window.scrollBy(0, 100);
    },1000);
}
function scrollTopBtn(){
    window.scrollTo(0,0);
}
//ex4
var  newWindow;
function OpenNewWindow(){
    newWindow= window.open("www.google.com","newWindow","width=800,height=600,left=200,top=100");
}
function closewindow(){
    newWindow.close();
}
//ex5
console.log(location.href);
function goToGoogle(){
    location.assign("www.google.com");
}
function replaceURL(){
    location.replace("www.google.com");  
}
function reloadPage(){
    location.reload();
}

//ex6
function historyback(){
    history.back();
    alert("the website go page back");
}
function historyforward(){
    history.forward();
    alert("the website go page forward");
}
function historygo(){
    history.go(-2);
    alert("the website go two page back");
}

//ex7
function ShowScreenInfo(){
    console.log("width",screen.width);
    console.log("height",screen.height);
    console.log("Available height",screen.availHeight);
    console.log("Available width",screen.availWidth);
}

//ex8
var image=document.getElementById("image");
function ChangeTitleandImage(){
    document.title="Day7";
    image.setAttribute("src","profile2.jpg");

}
//ex9
var divvv=document.getElementById("divvv");
function AddHtml(){
    divvv.innerHTML="<p>iam the updated inner html</p>";

}
function AddText(){
    divvv.innerText="iam the updated inner Text";
    
}
//ex10
var div2=document.getElementById("divOne");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
console.log(div2);
console.log(p1);
console.log(p2);

var div22=document.getElementsByClassName("divone");
var p12=document.getElementsByClassName("class1");
console.log(div22);
console.log(p12);

var div23=document.getElementsByTagName("div");

var p=document.getElementsByTagName("p");
console.log(div23);
console.log(p);

var div=document.querySelector("div");
var divs=document.querySelectorAll("div");

var pp=document.querySelector("p");
var ps=document.querySelectorAll("p");

console.log(div);
console.log(divs);
console.log(pp);
console.log(ps);
