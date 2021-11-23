const fs = require('fs')
const generatePage = require('./src/page-template')

// This holds the user command-line arguments.
const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Protfolio complete! Check out index.html to see the output!');
})



























// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);