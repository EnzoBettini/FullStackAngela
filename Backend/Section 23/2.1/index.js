const fs = require("fs")

// fs.writeFile("message.txt", "Hello from node!", (err) => {
//     if (err) throw err;
//     console.log("the file has benn saved!");
// });

fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("ERRO:", err);
        return;
    }
    console.log(data);
});
