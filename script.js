let container = document.querySelector("#container");
const cool = "black";

function create(n){
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", (e) => {
                square.style.backgroundColor = cool;
            })
            container.appendChild(square);
        }
    }
}

let dimensions;
let btn = document.querySelector("#change_d");
btn.addEventListener("click", (e)=>{
    dimensions = prompt("Input Squares per Side");
})

function deleteGrid(){
    if (dimensions){
        //delete the grid
    }
    else return;
}