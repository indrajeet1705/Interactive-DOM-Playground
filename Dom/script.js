let  box1=document.getElementById("box1");
box1.addEventListener("mouseenter",function(){
    let x=Math.floor(Math.random()*100);
    box1.innerHTML=`<h1>${x}</h1>`;
})
box1.addEventListener("mouseleave",function(){
    box1.innerHTML="<h1>1</h1>";
})

let  box2=document.getElementById("box2");
let clr="red";
box2.addEventListener("mouseenter",function(){
    if(clr=="red"){
        box2.style.backgroundColor=clr;
        clr="green";
    }
    else if(clr=="green"){
        box2.style.backgroundColor=clr;
        clr="blue";
    }
    else{
        box2.style.backgroundColor=clr;
        clr="red";
    }
})
box2.addEventListener("mouseleave",function(){
    box2.style.backgroundColor="white";
})

let box3=document.getElementById("box3");
let x,y,z;
box3.addEventListener("mouseenter",function(){
    x=Math.floor(Math.random()*255);
    y=Math.floor(Math.random()*255);
    z=Math.floor(Math.random()*255);
    box3.style.backgroundColor=`rgb(${x},${y},${z})`;
})
box3.addEventListener("mouseleave",function(){
    box3.style.backgroundColor="white";
})

let box4=document.getElementById("box4");
let a,b,c;
box4.addEventListener("click",function(){
    a=Math.floor(Math.random()*255);
    b=Math.floor(Math.random()*255);
    c=Math.floor(Math.random()*255);
    box3.style.backgroundColor=`rgb(${a},${b},${c})`;
    box2.style.backgroundColor=`rgb(${b},${c},${a})`;
    box1.style.backgroundColor=`rgb(${c},${a},${b})`;
})
box4.addEventListener("mouseleave",function(){
    box3.style.backgroundColor="white";
    box2.style.backgroundColor="white";
    box1.style.backgroundColor="white";
})
