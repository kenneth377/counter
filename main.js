window.addEventListener("load", ()=>{
    let resbtn = document.querySelector("#resbtn")
let decbtn = document.querySelector("#decbtn")
let incbtn = document.querySelector("#incbtn")
let num = document.querySelector("#counternumber")


if(localStorage.getItem("kennethscounter")){
    counter = parseInt(localStorage.getItem("kennethscounter"));
}
else{
    counter = 0;
}
num.innerText = counter

resbtn.addEventListener("click",()=>{
    counter = 0;
    num.innerText = counter
    localStorage.setItem("kennethscounter",counter)
})

incbtn.addEventListener("click",()=>{
    counter += 1;
    num.innerText = counter;
    localStorage.setItem("kennethscounter",counter)
})

decbtn.addEventListener("click",()=>{
    counter -= 1;
    if(counter>0){
        num.innerText = counter
    }
    else{
        counter = 0;
        num.innerText = counter;
    } 
    localStorage.setItem("kennethscounter",counter)  
})
}
)