// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function (breed, done) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) done(data);
  });
};

const printCatInfo = breed => {
  console.log("Return Value: ", breed); //
};

breedDetailsFromFile("Bombay", printCatInfo);