/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'URL',
            message: "What's the URL?"
        }
    ])
    .then((answers) => {
        fs.writeFile('input.txt', answers.URL, (err) => {
            if (err) throw err;
        });
        const url = answers.URL;
        const qrCodeImage = qr.image(url, { type: 'png' });
        qrCodeImage.pipe(fs.createWriteStream('qrcode.png'));
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong:", error);
        }
    });
