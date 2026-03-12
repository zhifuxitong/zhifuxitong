document.addEventListener("scroll",function(){

let header=document.querySelector(".header")

if(window.scrollY>50){

header.style.background="#000"

}else{

header.style.background="#0b1c2c"

}

})