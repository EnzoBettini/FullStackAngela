function randomNumber() {
    let dice1 = document.getElementById("img1")
    let dice1Value = Math.floor(Math.random() * (6 - 1) + 1)
    let src1 = "./images/dice" + dice1Value + ".png"
    dice1.src = src1

    let dice2 = document.getElementById("img2")
    let dice2Value = Math.floor(Math.random() * (6 - 1) + 1)
    let src2 = "./images/dice" + dice2Value + ".png"
    dice2.src = src2

    let headerToChange = document.querySelector("h1")
}

randomNumber()
