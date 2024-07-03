let arr = []
const container = document.querySelector("#container");
const col = "black";
function create(n){
    const maxdim = `${n * 50}px`;
    container.style.maxWidth = maxdim;
    container.style.maxHeight = maxdim;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
            square.addEventListener("mouseover", (e) => {
                square.style.backgroundColor = col;
            })
            arr.push(square);
        }
    }
}

const btn = document.querySelector("#change_d");
btn.addEventListener("click", (e) => {
    let dims = prompt("Enter dimensions between 0 and 100");
    if (dims > 100) dims = 100;
    dell();
    create(dims);
});

function dell(){
    arr.forEach((square) => {
        container.removeChild(square);
        square.remove();
        //arr.pop();
    });
    arr = [];
}
create(16);