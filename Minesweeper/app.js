document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const flagsLeft = document.querySelector("Flags-Left");
    const width = 10;
    console.log(grid);
    let bombAmount = 20;
    function createBoard(){


        for(let i = 0; i < width*width; i++) {
            flagsLeft.innerHTML = bombAmount;
            const square = document.createElement("div");
            square.id = i;
            grid.appendChild(square);
        }
    }

    createBoard();
});