let container = document.querySelector("#container");
const cool = "black";

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", (e) => {
            square.style.backgroundColor = cool;
        })
        container.appendChild(square);
    }
}