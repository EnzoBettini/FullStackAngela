for (let i=99; i>=0; i--){
    if (i===0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
    else{
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        console.log("Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
        console.log(" ");
    }
}