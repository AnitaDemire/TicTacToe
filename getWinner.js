function getWinner(){
    var cellsInRows = [[], [], []];
    var rows = document.querySelectorAll(".row");
    for (var i = 0; i < rows.length; i++) {
       var cells = rows[i].querySelectorAll(".cell")
       for (var j = 0; j < cells.length; j++){
           if (cells[j].classList.contains("x")){
            cellsInRows[i][j] = "x";
           } else if (cells[j].classList.contains("o")) {
            cellsInRows[i][j] = "o";
           } else (
            cellsInRows[i][j] = ""
           )
           
        }
    }
    for (var i = 0; i < cellsInRows.length; i++){
        if (cellsInRows[i][0] === "x" && cellsInRows[i][1] === "x" && cellsInRows[i][2] === "x") {
            return cellsInRows[i][0];
        } else if (cellsInRows[i][0] === "o" && cellsInRows[i][1] === "o" && cellsInRows[i][2] === "o"){
            return cellsInRows[i][0];
        } else if (cellsInRows[0][i] === "x" && cellsInRows[1][i] === "x" && cellsInRows[2][i] === "x"){
            return cellsInRows[0][i];
        } else if (cellsInRows[0][i] === "o" && cellsInRows[1][i] === "o" && cellsInRows[2][i] === "o"){
            return cellsInRows[0][i];
        }
    }
    if (cellsInRows[0][0] === "x" && cellsInRows[1][1] === "x" && cellsInRows[2][2] === "x"){
        return cellsInRows[0][0];
    } else if (cellsInRows[0][2] === "x" && cellsInRows[1][1] === "x" && cellsInRows[2][0] === "x"){
        return cellsInRows[0][2];
    } else if (cellsInRows[0][0] === "o" && cellsInRows[1][1] === "o" && cellsInRows[2][2] === "o"){
        return cellsInRows[0][0];
    } else if (cellsInRows[0][2] === "o" && cellsInRows[1][1] === "o" && cellsInRows[2][0] === "o"){
        return cellsInRows[0][2];
    } 
    for (var i = 0; i < cellsInRows.length; i++){
        for (var j =0; j < cellsInRows[i].length; j++) {
            if (!cellsInRows[i][j]){
                return;
            }
        }
    } 
    return "y";
}