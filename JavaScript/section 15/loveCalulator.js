//class 90

function loveCalc(){
    let love = Math.round(Math.random()*101);
    let name1=prompt("tell me your name!");
    let name2=prompt("tell me your partners name!");
    alert(`${name1} and ${name2}'s love is ${love}%`);
}

loveCalc();