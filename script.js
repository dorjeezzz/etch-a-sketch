let container = document.querySelector("#container");
const cool = "black";
let arr = []
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

let btn = document.querySelector("#change_d");
btn.addEventListener("click", (e)=>{
    let dimensions = prompt("Input Squares per Side");
    if (dimensions >= 100) dimensions == 100;
    deleteGrid();
    create(dimensions);
})

function deleteGrid(){
    arr.forEach((square) => {
        container.removeChild(square);
        square.remove();
    });
    arr = [];
}

create(16);