let number  = document.querySelector('.number')
let result = document.querySelector('.result')
let randomNr;

function CheckNumber() {
    randomNr = Math.floor(Math.random() * 100)
    number.innerHTML = randomNr;
    if (number.textContent >= 10) {
        result.textContent = "Success"
        result.classList.add("success")
        result.classList.remove("error")
    }
    else if (number.textContent < 10) {
        result.textContent = "Fail, please try again!"
        result.classList.add("error")
        result.classList.remove("success")
    }
}