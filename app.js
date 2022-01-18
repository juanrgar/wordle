'use strict';


function drawGrid() {
    let grid = document.getElementById("grid");

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            row.append(cell);
        }
        grid.append(row);
    }
}

drawGrid();

