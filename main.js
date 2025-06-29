let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; 
let count = 0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        if (turnO) {
            box.innerText = "O"
            box.style.color = "red"
            box.style.boxShadow = "0 0 20px red"
            turnO = false;
        }
        else{
            box.innerText = "X"
            box.style.color = "blue"
            box.style.boxShadow = "0 0 20px blue"
            turnO = true;
        }
        box.disabled = true;
        count++;
        
        let iswinner = checkwinner();
        
        if (count === 9 && !iswinner){
            showdraw();
            }
    })
})


// Reset Button

const enableboxes = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.boxShadow = "rgb(49, 49, 49) 0 0 20px";
    }
}
resetbtn.addEventListener("click", ()=>{
    turnO =true;
    count = 0;
    enableboxes();
    msgContainer.classList.add("hide");
})

// Draw match

let showdraw = () =>{
    msg.innerText = `The match is draw`;
    msgContainer.classList.remove("hide");
    disableboxes();
}


// Winner

const disableboxes = () =>{
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showwinner = (winner) =>{
    msg.innerText = `Congratulations the Winner is: ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () =>{
    for (const pattern of winpatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 !== "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                showwinner(val1);
                return true;
            }
        }
    }
};