//event listeners
document.addEventListener("mousedown", fireGun)
document.addEventListener("keydown", moveright)
document.addEventListener("keydown", moveleft)
document.getElementById("reset").addEventListener("click", reset)

//global variables
let click = true
let Grid = []

createGrid()

let player = {
    row : 16,
    coloum : 11
}

let bullet = []

let enemy = [
{row : 0, col : 5}, {row : 0, col : 6}, {row : 0, col : 7}, {row : 0, col : 8}, {row : 0, col : 9}, {row : 0, col : 10}, {row : 0, col : 11}, {row : 0, col : 12}, {row : 0, col : 13}, {row : 0, col : 14}, {row : 0, col : 15}, {row : 0, col : 16}, {row : 0, col : 17}, 
 {row : 1, col : 5}, {row : 1, col : 6}, {row : 1, col : 7}, {row : 1, col : 8}, {row : 1, col : 9}, {row : 1, col : 10}, {row : 1, col : 11}, {row : 1, col : 12}, {row : 1, col : 13}, {row : 1, col : 14}, {row : 1, col : 15}, {row : 1, col : 16}, {row : 1, col : 17}, 
 {row : 2, col : 5}, {row : 2, col : 6}, {row : 2, col : 7}, {row : 2, col : 8}, {row : 2, col : 9}, {row : 2, col : 10}, {row : 2, col : 11}, {row : 2, col : 12}, {row : 2, col : 13}, {row : 2, col : 14}, {row : 2, col : 15}, {row : 2, col : 16}, {row : 2, col : 17}, 
 {row : 3, col : 5}, {row : 3, col : 6}, {row : 3, col : 7}, {row : 3, col : 8}, {row : 3, col : 9}, {row : 3, col : 10}, {row : 3, col : 11}, {row : 3, col : 12}, {row : 3, col : 13}, {row : 3, col : 14}, {row : 3, col : 15}, {row : 3, col : 16}, {row : 3, col : 17}, 
 {row : 4, col : 5}, {row : 4, col : 6}, {row : 4, col : 7}, {row : 4, col : 8}, {row : 4, col : 9}, {row : 4, col : 10}, {row : 4, col : 11}, {row : 4, col : 12}, {row : 4, col : 13}, {row : 4, col : 14}, {row : 4, col : 15}, {row : 4, col : 16}, {row : 4, col : 17}
]

Grid[player.row][player.coloum] = 1

for(let n = 0; n < enemy.length; n++){
    Grid[enemy[n].row][enemy[n].col] = 2
}
//display Grid
ShowGrid()

//functions
function createGrid() {

    // 0 = empty space 2 = enemey , 1 = your player, 3 = wall, 5 = bullet, 6 =enemy bullet
    Grid = [
        [3, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
]
} 

function ShowGrid() {
    for(var row = 0; row < 18; row++) {
        for(var coloum = 0; coloum < 23; coloum++) {
          
          // add div
          let div1 = document.createElement("div")
   
          //give divs id
          div1.id = "cell" + row + "-" + coloum

          //add data to dataset
           div1.dataset.x = row
           div1.dataset.y = coloum

           //add event listener to each div
           if (Grid[row][coloum] == 0) {
             div1.classList = "empty"
           } else if (Grid[row][coloum] == 3) {
               div1.classList = "wall"
           } else if (Grid[row][coloum] == 2) {
               div1.classList = "enemy"
           } else if (Grid[row][coloum] == 1) {
               div1.classList = "tank"
           }

          //send to html
          document.getElementById("grid").append(div1)
        }
    }
}

function fireGun() {
    //Bullet == 5
    for(var col = 0; col < 22; col++) {
        if (bullet[0] == undefined){
            if(Grid[16][col] == 1) {
                Grid[15][col] = 5
                bullet.push([15, col])
            }
        }
    }
    if (click == true){
        setInterval(moveBullet, 150)
    }
    click = false
}

setInterval(changeClass, 10);

function changeClass() {
    for(var row = 0; row < 18; row++) {
        for(var coloum = 0; coloum < 23; coloum++) {
            var DivID ="cell" + row + "-" + coloum

            //add class to each div
           if (Grid[row][coloum] == 0) {
            document.getElementById(DivID).classList = "empty"
          } else if (Grid[row][coloum] == 3) {
            document.getElementById(DivID).classList = "wall"
          } else if (Grid[row][coloum] == 2) {
            document.getElementById(DivID).classList = "enemy"
          } else if (Grid[row][coloum] == 1) {
            document.getElementById(DivID).classList = "tank"
          } else if (Grid[row][coloum] == 5) {
            document.getElementById(DivID).classList = "bullet"
          }
        }
    }
}
  
function moveBullet() {
    moveBulletUp(bullet[0])
}

function moveBulletUp(num) {
    if (bullet[0][0] == 0){
        bullet = []
    }else if (bullet[0] == num){
        //get id
     var BulletID = "cell" + bullet[0][0] + "-" + bullet[0][1]

     //move space
     //set current loctation to 0
     Grid[bullet[0][0]][bullet[0][1]] = 0;

     //update player locatione
     bullet[0][0]--

     //uptade the class/Grid
     BulletID = "cell" + bullet[0][0] + "-" + bullet[0][1]

     //set grid up
     Grid[bullet[0][0]][bullet[0][1]] = 5;

        //kill enemy
    for (let n = 0; n < enemy.length ; n++)
        if(bullet[0][0] == enemy[n].row) {
            if(bullet[0][1] == enemy[n].col) {
                Grid[bullet[0][0]][bullet[0][1]] = 0
                bullet.splice(0, 1)
                enemy.splice(n , 1)
            }
        }
        Grid[15] = [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]
    }
}

function moveleft(event) {
    if (Grid[player.row][player.coloum-1] == 0 || Grid[player.row][player.coloum-1] == 5){
        if (event.keyCode == 37 || event.keyCode == 65 || event.keyCode == 100) {

            //get id
            let cellID = "cell" + player.row + "-" + player.coloum

            //set current loctation to 0
            Grid[player.row][player.coloum] = 0;

            //update player locatione
            player.coloum--

            //uptade the class/Grid
            cellID = "cell" + player.row + "-" + player.coloum

            //set grid up
            Grid[player.row][player.coloum] = 1;
        }
    }
}

function moveright(event) {
    if (Grid[player.row][player.coloum + 1] == 0 || Grid[player.row][player.coloum + 1] == 5){
        if (event.keyCode == 39 || event.keyCode == 68 || event.keyCode == 102) {

            //get id
            let cellID = "cell" + player.row + "-" + player.coloum

            //move space
            //set current loctation to 0
            Grid[player.row][player.coloum] = 0;

            //update player locatione
            player.coloum++

            //uptade the class/Grid
            cellID = "cell" + player.row + "-" + player.coloum

            //set grid up
            Grid[player.row][player.coloum] = 1;
        }    
    }
}

setInterval(deleteBullet, 1)

function deleteBullet(){
    deleteBulletClass(0)
}

function deleteBulletClass(row) {
    for(var col = 0; col < 23; col++) {
        if (Grid[row][col] === 5 || Grid[row][col] === 6) {
            Grid[row][col] = 0
        }
    }
}

setInterval(win, 10)

function win() {
    if(enemy.join("") == ""){
        document.getElementById("winner").innerHTML = "YOU WIN!!!!!!"
        grid = []
    }
}

function reset(){
    document.location.reload()
} 