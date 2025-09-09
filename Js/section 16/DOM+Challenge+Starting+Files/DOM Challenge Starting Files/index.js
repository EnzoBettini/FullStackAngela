item = document.querySelectorAll(".list");

buttons = document.querySelectorAll(".active-red-btn");

buttons.forEach((button) => {
    button.style.backgroundColor = "red";
})

for (let i = 0; i < item.length; i++) {
    if (item[i].innerHTML == "Third") {
        item[i].innerHTML = "Hello";
        break;
    }

    if (item[i].innerHTML == "Second") {
        item[i].innerHTML = "<a>steam</a>";
        item[i].querySelector("a").setAttribute("href", "https://www.steam.com");
    }
}

document.querySelector("button").classList.add("invisible")
document.querySelector("button").classList.remove("invisible")
document.querySelector("button").classList.toggle("invisible")
document.querySelector("button").classList.toggle("invisible")

helloWorld = "Hello World!"

document.querySelector("h1").innerHTML = `<strong> ${helloWorld} </strong>`
