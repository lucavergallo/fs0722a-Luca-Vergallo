giocoNumeriRandom();



function giocoNumeriRandom():void{

    let g1 = 12;
    
    let g2 = 6;
    
    let rdm = Math.floor(Math.random() * 99 + 1) 
    
    console.log("I giocatori sono: ",g1,g2);

    setTimeout(function() {
        if(g1 == rdm ||g2 ==rdm){
            console.log("uno dei 2 giocatori ha indovinato");

            setTimeout(function() {
                if(g1 == rdm){
                    console.log("il primo giocatore ha vinto la partita!");
                }else{
                    console.log("il secondo giocatore ha vinto la partita!");
                }
            },2000);
        }else{
            console.log("Purtroppo non ci sono stati vincitori ma il giocatore che si è avvicinato di più è...")
            setTimeout(function() {
                let diff1 = Math.abs(g1 - rdm);
                let diff2 =Math.abs(g2 - rdm);

                Math.min(diff1,diff2) == diff1 ? console.log("il giocatore 1!") : console.log("il giocatore 2!");
            },2000);
        }
    },2000);
}