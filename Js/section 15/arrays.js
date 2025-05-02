let guestList = ["John", "Jane", "Jack", "Jill", "Jim", "Joe", "Judy", "Jake", "Jess", "Jordan"];

let guestName = prompt("Enter your name: ");

if (guestList.includes(guestName)) {
    alert("Welcome to the party, " + guestName + "!");
}
else {
    alert("Sorry, " + guestName + ". You are not on the guest list.");
}