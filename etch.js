let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createPad(16);

    document.querySelector("body").addEventListener("click", function (e){
        if (e.target.tagName != "BUTTON"){
            click = !click;
            let drawMode = document.querySelector("#mode");
            if (click){
                drawMode.style.color = "green"
                drawMode.innerHTML = "Mode : Drawing";
            }
            else{
                drawMode.style.color = "red"
                drawMode.innerHTML = "Mode: Not Drawing";
            }
        }
      
    })

    let btn = document.querySelector("#popup");
    btn.addEventListener("click", function(){
        let size = padSize();
        createPad(size);
    })
})

//Dealing with sizing and creating divs like the TOP ask to
function createPad(size){
    let pad = document.querySelector(".pad");

    pad.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", eraserPad)
        pad.insertAdjacentElement("beforeend", div);
    }
}

//Taking in the users input
function padSize(){
    let usrInput = prompt("Choose a size for your Sketchpad! (Size has to be 1-64)");
    let message = document.querySelector("#message");
    if (usrInput == ""){
        message.style.color = "red"
        message.innerHTML = "Please enter a value"
    }
    else if (usrInput < 0 || usrInput > 64){
        message.style.color = "red"
        message.innerHTML = "Enter a Value between 1 and 64"
    }
    else{
        return usrInput;
    }
}

function eraserPad(){
    if (click){
        if (color == "aliceblue"){
            this.style.backgroundColor = "aliceblue"
        }
        else{
            this.style.backgroundColor = "black"
        }
    }
   
}
function setColor(eraserChoice){
        color = eraserChoice;
}

function resetPad(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "aliceblue");
}

