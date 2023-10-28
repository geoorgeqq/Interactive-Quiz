let btn = document.querySelectorAll(".btn");

btn.forEach(btn => {
    btn.addEventListener("click", () =>{
        if(btn.getAttribute("value") === "corect"){
            alert("Corect!");
        }else{
            btn.style.backgroundColor = "red";
        }
    })
    
});



