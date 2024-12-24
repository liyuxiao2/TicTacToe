function createPlayer(name, symbol, type = "human"){
    return{
        name,
        symbol,
        type,
        getMove: function(board){
            if(type == "AI"){
                //TODO AI LOGIC
            }
            else{
                //TODO HUMAN
            }
        }
    }
}


function gameBoard(){

}();
