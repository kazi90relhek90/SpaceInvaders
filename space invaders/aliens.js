let enemyBullet = []
let send = true
let lastRow = true
let way = "left"
let k = 12
let highestRow = 0

//make aliens shoot
setInterval(retaliate, 800)

function retaliate() {
     let randomcol = Math.floor(Math.random() *22) + 1
    if(enemyBullet.join("") === ""){
        for(let n = 0; n < enemy.length; n++){
            if(randomcol == enemy[n].col)
            var closestRowToPlayer = getClosestRow(randomcol)
            }
        closestRowToPlayer++
        enemyBullet.push([closestRowToPlayer, randomcol])   
        if (send == true){
            setInterval(SendBulletDown, 40)
            send = false
        }
    }
}

function getClosestRow(randomcol) {
    let closestRowToPlayer = 15
    while (closestRowToPlayer >= 0){
        if (Grid[closestRowToPlayer][randomcol] === 2) {
            return closestRowToPlayer
        } else if (Grid[closestRowToPlayer][randomcol] === 0||Grid[closestRowToPlayer][randomcol] === 5){
            closestRowToPlayer--
        }
    }
}

function SendBulletDown(){
     if (enemyBullet != []){
        moveBulletDown(enemyBullet[0])
    }
}

function moveBulletDown(num) {
    //Check for NaN
    noNaN()
    if(enemyBullet[0][0] == 17){
        enemyBullet = []
    }else if (enemyBullet[0] === num){
        //get id
     var enemyBulletID = "cell" + enemyBullet[0][0] + "-" + enemyBullet[0][1]
    
     //set current loctation to 0
     Grid[enemyBullet[0][0]][enemyBullet[0][1]] = 0;

     //update player locatione
     enemyBullet[0][0]++

     //uptade the class/Grid
     enemyBulletID = "cell" + enemyBullet[0][0] + "-" + enemyBullet[0][1]

     document.getElementById(enemyBulletID).classList = "bullet"

     //set grid up
     Grid[enemyBullet[0][0]][enemyBullet[0][1]] = 6;
    }
}

//if it is NaN remove array
function noNaN(){
    if(enemyBullet != []) {
        if(isNaN(enemyBullet[0][0])){
            enemyBullet = []
        }
    }
}

//Make aliens move
setInterval(moveAleins, 1000)

function moveAleins(){
    let n = 0

    if(way === "left"){
        moveAleinsLeft()
        if(enemy[n].col == 1){
            lowerOne()
            way = "right"
        }
    } else if (way === "right"){
        moveAleinsRight()
        if (enemy[k].col > 20){
            lowerOne()
            way = "left"
        }
    }
}

function moveAleinsLeft() {
    for(var n = 0; n < enemy.length; n++){
        let enemyID = "cell" + enemy[n].row + "-" + enemy[n].col
    
        document.getElementById(enemyID).classList = "empty"
    
        Grid[enemy[n].row][enemy[n].col] = 0
    
        enemy[n].col--
    
        Grid[enemy[n].row][enemy[n].col] = 2
    
        enemyID = "cell" + enemy[n].row + "-" + enemy[n].col
    
        document.getElementById(enemyID).classList = "enemy"
    }
}

function lowerOne(){
    for(let n = enemy.length - 1; n > -1; n--){
        
        let enemyID = "cell" + enemy[n].row + "-" + enemy[n].col

        Grid[enemy[n].row][enemy[n].col] = 0

        document.getElementById(enemyID).classList = "empty"

        enemy[n].row++

        Grid[enemy[n].row][enemy[n].col] = 2

        enemyID = "cell" + enemy[n].row + "-" + enemy[n].col
        
        document.getElementById(enemyID).classList = "enemy"

    }
    highestRow++
}

function moveAleinsRight() {
    for(let n = enemy.length - 1; n > -1; n--){

    let enemyID = "cell" + enemy[n].row + "-" + enemy[n].col

    document.getElementById(enemyID).classList = "empty"
    
    Grid[enemy[n].row][enemy[n].col] = 0
    
    enemy[n].col++
    
    Grid[enemy[n].row][enemy[n].col] = 2
    
    enemyID = "cell" + enemy[n].row + "-" + enemy[n].col
    
    document.getElementById(enemyID).classList = "enemy"
    }
}

setInterval(changeToEmpty, 10)

function changeToEmpty(){
    for(let row = 0; row < 18; row++){
        for(let col = 0; col < 22; col++){
            if(Grid[row][col] === 0){
                document.getElementById("cell" + Grid[row] + "-" + Grid[col])
            }
        }
    }
}
    
setInterval(lose, 1)

function lose() {
    for(let n = 0; n < enemy.length; n++)
    if(enemy[n].row == 16) {
        document.getElementById("winner").innerHTML = "YOU LOSE"
        Grid = []
    }
    for(let n = 0; n < enemyBullet.length; n++)
    if (enemyBullet[n][0] === player.row && enemyBullet[n][1] === player.coloum){
        document.getElementById("winner").innerHTML = "YOU LOSE"
        Grid = []
    }
}

setInterval(FinalRow, 10)

function FinalRow(){
    let numEnemy = 0
    for(let col = 0;col <= 22 ; col++){
        if(Grid[highestRow][col] == 2){
            numEnemy++
        }        
    }
    k = numEnemy -1
}

setInterval(deletEnemyBullet, 1);

function deletEnemyBullet() {
    deleteBulletClass(17)
}

//keep console clear
    setInterval(noConsole, 10);
function noConsole() { 
    console.clear()
}