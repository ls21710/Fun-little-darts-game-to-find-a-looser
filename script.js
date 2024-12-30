let scoreEins = document.getElementById("score1")
let scoreZwei = document.getElementById("score2")
let scoreDrei = document.getElementById("score3")
let ergebnisP1link = document.getElementById("ergebnisP1html")

let welcheZahl = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
let wieOft = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let button1Counter = 0
let scoreP11 = 0
let scoreP12 = 0
let scoreP13 = 0
let ergebnisP1 = 0

function button1clicked() {
    
    button1Counter = button1Counter + 1
    
    let welcheZahl = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    let wieOft = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (button1Counter === 1) {
        scoreP11 = welcheZahl * wieOft
        scoreEins.textContent = scoreP11
    } else if (button1Counter === 2) {
        scoreP12 = welcheZahl * wieOft
        scoreZwei.textContent = scoreP12
    } else if (button1Counter === 3) {
        scoreP13 = welcheZahl * wieOft
        scoreDrei.textContent = scoreP13
        ergebnisP1 = scoreP11 + scoreP12 + scoreP13
        ergebnisP1link.textContent = ergebnisP1
    } else if (button1Counter > 3) {
        alert("Es wurden alle Pfeile geworfen. Spieler 2 ist am Zug")
    }

    console.log(button1Counter)
}


let score2Eins = document.getElementById("2score1")
let score2Zwei = document.getElementById("2score2")
let score2Drei = document.getElementById("2score3")
let ergebnisP2link = document.getElementById("ergebnisP2html")

let button2Counter =0
let scoreP21 = 0
let scoreP22 = 0
let scoreP23 = 0
let ergebnisP2 = 0
let result = 0


let ergebnisBerechnung = false

function button2clicked() {
    
    button2Counter = button2Counter + 1
    
    let welcheZahl2 = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    let wieOft2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (button2Counter === 1) {
        scoreP21 = welcheZahl2 * wieOft2
        score2Eins.textContent = scoreP21
    } else if (button2Counter === 2) {
        scoreP22 = welcheZahl2 * wieOft2
        score2Zwei.textContent = scoreP22
    } else if (button2Counter === 3) {
        scoreP23 = welcheZahl2 * wieOft2
        score2Drei.textContent = scoreP23
        ergebnisP2 = scoreP21 + scoreP22 + scoreP23
        ergebnisP2link.textContent = ergebnisP2
    } else if (button2Counter > 3) {
        alert("Es wurden alle Pfeile geworfen. Das Spiel ist zu Ende")
    }

    if (ergebnisP1 > 3 && ergebnisP2 > 3) {
        ergebnisBerechnung = true
    }
    
    if (ergebnisBerechnung === true) {
        result()
    }

    function result() {
        if (ergebnisP1 > ergebnisP2) {
            document.getElementById("container-p1").style.background = "#008000";
        } else if (ergebnisP1 < ergebnisP2) {
            document.getElementById("container-p2").style.background = "#008000";
        } else {
            alert("DRAW! Try Again better!")
        }
    }
}

function resetScores() {
    scoreEins.textContent = "..."
    scoreZwei.textContent = "..."
    scoreDrei.textContent = "..."
    score2Eins.textContent = "..."
    score2Zwei.textContent = "..."
    score2Drei.textContent = "..."
    ergebnisP1link.textContent = "..."
    ergebnisP2link.textContent = "..."
    ergebnisP1 = 0
    ergebnisP2 = 0
    result = 0
    button1Counter = 0
    button2Counter = 0
    scoreP11 = 0
    scoreP12 = 0
    scoreP13 = 0
    scoreP21 = 0
    scoreP22 = 0
    scoreP23 = 0
    ergebnisBerechnung = false
    document.getElementById("container-p1").style.background = "#dad0d0af"
    document.getElementById("container-p2").style.background = "#dad0d0af"

}
