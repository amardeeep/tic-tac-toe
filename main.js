//Gameboard object
const gameboard=(function() {
    const columns=3;
    const rows=3;
    const array=[];
    let index=0;
    for(let i=0;i<columns;i++){
        array[i]=[];
        for(let j=0;j<rows;j++){
            array[i][j]=index++;
        }
    }
    const length=()=>array.length;
    const pushElementToArray=(element)=>array.push(element);
    return {array,length,pushElementToArray};
})();
console.log(gameboard.pushElementToArray)
//player object
function playerObject(player){
    const marker=player
}
