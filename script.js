// ================================
// KHAO MANEE WEBSITE
// ================================

// Copy Contract

function copyContract(){

const input=document.getElementById("contractAddress");

input.select();

input.setSelectionRange(0,99999);

navigator.clipboard.writeText(input.value);

const button=document.querySelector(".contract-box button");

const oldText=button.innerHTML;

button.innerHTML="✅ COPIED!";

setTimeout(()=>{

button.innerHTML=oldText;

},2000);

}



// Navbar shadow

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>30){

navbar.style.background="rgba(5,5,20,.90)";

}else{

navbar.style.background="rgba(5,5,20,.45)";

}

});



// Fade animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition=".8s";

observer.observe(section);

});
