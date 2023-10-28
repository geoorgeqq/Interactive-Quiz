let btn = document.querySelectorAll(".btn");
let intrebari = ["Question2.html", "Question3.html","Question4.html", "Final.html"];
currentIndex = 0;

btn.forEach((btn,currentIndex) => {
    btn.addEventListener("click", () => {
        if (btn.getAttribute("value") === "corect" && currentIndex < intrebari.length) {
            window.location = intrebari[currentIndex];
        }else {
            btn.style.backgroundColor = "red";
        }
    });
});



