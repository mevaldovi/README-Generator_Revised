// TODO: Include packages needed for this application = DONE
const inquirer = require('inquirer');
const fs = require('fs');
// const express = require("express");
const app = express();
const PORT = 3000;

app.set("view file", "index.html"); //tells app to view file

app.get("/", (req, res) => {
    res.render("index"); // index refers to index.html
});

app.listen(3000, () => {
        console.log("server started on port 3000")
    }) //telling the port to listen for the server doing its thing


//create a promise for each of the questions to load;
.then((response) => { //
    console.log(response);
    writeToFile('indexHTML', generateMarkdown(response)); //write out the files backbone and place all the content from generateMarkdown inside of it !
    console.log("generated markdown!");
})


function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created indec.html!')
    );
}