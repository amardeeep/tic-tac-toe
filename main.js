//Gameboard object
const gameboard=(function() {
    const columns=3;
    const rows=3;
    const gameGrid=[];
    let index=0;
    for(let i=0;i<columns;i++){
        gameGrid[i]=[];
        for(let j=0;j<rows;j++){
            gameGrid[i][j]=index++;
        }
    }
    
    
    return {gameGrid};
})();

//player object
function playerObject(player,marker){
    
    
    let score=0;
    const wonRound=()=>score++;
    const lossRound=()=>score;
    const drawRound=()=>score;
    return {player,marker,wonRound,lossRound,drawRound,assignMarker};
}
//game Object
function game(numberOfROunds,player1,marker1,player2,marker2){
    const numberOfROunds=numberOfROunds;
    const player1=playerObject(player1,marker1);
    const player2=playerObject(player2,marker2);
    


}