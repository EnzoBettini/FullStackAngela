let buttons = document.querySelectorAll('.btn');
let sequence = [];
let colors = {
    "yellow": 1,
    "blue": 2,
    "green": 3,
    "red": 4
};
let counter = 0;
let levelCounter = 1;
let onGame = false;




buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (onGame == true) {

            let buttonPressed = button.classList;
            addPressed(buttonPressed[1]);
            checkSequence = verifySequence(sequence, counter, buttonPressed[1], colors);
            console.log(checkSequence)
            if (checkSequence != false) {
                counter = checkSequence;
                if (counter >= levelCounter) {
                    game(sequence, levelCounter, colors);
                    $("#level-title").text("Level " + levelCounter);
                    levelCounter += 1;
                    counter = 0;
                }
            } else {
                onGame = checkSequence;
                counter = 0;
                levelCounter = 1;
                sequence.length = 0;
                $("#level-title").text("Game over! Press any key to restart");
            }

        } else {
            let buttonPressed = button.classList;
            addPressed(buttonPressed[1]);
            changeBackgroundColor();
        }
    });
});

document.addEventListener("keydown", () => {
    if (sequence.length == 0) {
        startGame(sequence);
        onGame = true;
        game(sequence, counter, colors);
    }
})




function addPressed(button) {
    let buttonPressed = document.querySelector('.' + button);
    buttonPressed.classList.add('pressed');
    setTimeout(() => {
        buttonPressed.classList.remove('pressed');
    }, 100)
}

function generateSequence(sequence) {
    let randomNumber = 0;
    for (let i = 0; i < 100; i++) {
        randomNumber = Math.floor(Math.random() * 4) + 1;
        sequence.push(randomNumber)
    }
    console.log(sequence)
}

function changeBackgroundColor() {
    let body = document.querySelector('body');

    body.classList.add('game-over');
    setTimeout(() => {
        body.classList.remove('game-over');
    }, 100);
}

function game(sequence, counter, colors) {
    let active = sequence[counter];
    let colorToFlash = Object.keys(colors).find(key => colors[key] === active);
    let elementToFlash = $('.' + colorToFlash);
    setTimeout(() => {
        elementToFlash.fadeTo("fast", 0)
    }, 500)
    setTimeout(() => {
        elementToFlash.fadeTo("fast", 1)
    }, 500)

}

function startGame(sequence) {
    $("#level-title").text("Level 1");
    generateSequence(sequence);
}

function verifySequence(sequence, counter, buttonColor, colors) {
    let colorNumber = colors[buttonColor];
    console.log(counter);
    if (colorNumber == sequence[counter]) {
        return counter + 1;
    } else {
        changeBackgroundColor();
        return false;
    }
}
