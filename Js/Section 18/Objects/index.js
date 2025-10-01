var person = {
    name: "jonathan",
    age: 20,
    working: false,
    bosses: ["michael", "betty"]
}

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire
    this.cleaning = function () {
        console.log("Cleaning started")
    }
}
