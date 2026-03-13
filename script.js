const budgetPhotos = [
    "BudgetPicture.PNG",
    "signup.PNG",
    "budgets.PNG",
    "CodeSnippet.PNG",
]

const leftButton = document.querySelector("#leftSlide");
const rightButton = document.querySelector("#rightSlide");
const budgetPhoto = document.querySelector("#budgetPhoto");

leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);
let i = 0;

function moveLeft() {
 
    i = i === 0 ? (budgetPhotos.length-1) : i-1;
    budgetPhoto.setAttribute("src", budgetPhotos[i]);
}

function moveRight() {
    console.log("Move right");
    i = i === (budgetPhotos.length-1) ? 0 : i+1;
    budgetPhoto.setAttribute("src", budgetPhotos[i]);
}

