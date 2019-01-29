let randomLetter= "";
let wins=0;
let losses=0;
let guessesLeft=10;
let letterArray= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// let showingWins=document.getElementById("showWins");

// let showingLosses=

// let showingGuesses= document.getElementById("showGuesses");



const newGame= function(){
    randomLetter= letterArray[Math.floor(Math.random()*letterArray.length)];
    console.log("correct guess: ", randomLetter);
    wins=0;
    document.getElementById("showWins").innerText=wins;
    losses=0;
    document.getElementById("showLosses").innerText=losses;
    guessesLeft=10;
    document.getElementById("showGuesses").innerText=guessesLeft;
    document.getElementById("guessedLetters").innerText="";
}

const newLetter= function(){
    randomLetter= letterArray[Math.floor(Math.random()*letterArray.length)];
    console.log("correct guess: ", randomLetter);
}

newGame();

let showingLetters= document.getElementById("guessedLetters");



const keyHandler= function(event){
    const key=event.key;
    
    
    for(let i=0; i<letterArray.length;i++){
        if (letterArray[i]===key){
            console.log(event.key);
            guessedLetters.innerText+=key;
            
            if(key===randomLetter){
                wins++;
                document.getElementById("showWins").innerText=wins;
                alert("You guessed correctly!");
                newLetter();
                document.getElementById("guessedLetters").innerText="";
            }
            else{
                guessesLeft--;
                if (guessesLeft<1){
                    losses++;
                    document.getElementById("showLosses").innerText=losses;
                    alert("Sorry, you didn't guess the letter!");
                    guessesLeft=10;
                    document.getElementById("guessedLetters").innerText="";
                    newLetter();
                }
                
            }
                
        
        }
        
    }
    
}

document.onkeyup=keyHandler;

const clickHandler= function(event) {
    newGame();
}

let resetting= document.getElementById('resetButton');

resetting.onclick= clickHandler;