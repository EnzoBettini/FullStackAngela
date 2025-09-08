item = document.querySelectorAll(".list");

for (let i = 0; i < item.length; i++) {
    if (item[i].innerHTML == "Third") {
        item[i].innerHTML = "Hello";
        break;
    }
}

