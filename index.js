const formEl = document.querySelector(".form");

const inputs = document.querySelectorAll(".form input");

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    inputs.forEach(input=>{
        if(!input.value){
            input.parentElement.classList.add("error");
        }else{
            input.parentElement.classList.remove("error");  
        }
    });
});

