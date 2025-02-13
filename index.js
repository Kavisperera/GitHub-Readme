const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

const makeCommit = (n) => {
    if (n === 0) return simpleGit().push();
    
    const x = Math.floor(Math.random() * 55);
    const y = Math.floor(Math.random() * 7);
    
    const DATE = moment().subtract(1, 'y').add(1, 'd')
                                 .add(x, 'w').add(y, 'd').format();
    
    const data = { date: DATE };
    console.log(DATE);
    
    
    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add(['data.json', 'index.js']).commit(DATE, {'--date': DATE },
        makeCommit.bind(this, --n));
    });
};

makeCommit(200);

//--------------------Fixed date: exactly 1 year ago------------------//

//------------const jsonfile = require('jsonfile');
//------------const moment = require('moment');
//------------const simpleGit = require('simple-git');

//------------const FILE_PATH = './data.json';

//------------const makeCommit = (n) => {
   //------------ if (n === 0) return simpleGit().push();

    //------------const DATE = moment().subtract(1, 'y').format(); // Fixed date: exactly 1 year ago

    //------------const data = { date: DATE };
    //------------console.log(DATE);

   //------------ jsonfile.writeFile(FILE_PATH, data, () => {
       //------------ simpleGit().add(['data.json', 'index.js']).commit(DATE, { '--date': DATE },
       //------------     makeCommit.bind(this, --n));
   //------------ });
//------------};

//------------makeCommit(10);


//-------------------------Starts from Jan 1, 2025------------//

//------------const jsonfile = require('jsonfile');
//------------const moment = require('moment');
//------------const simpleGit = require('simple-git');

//------------const FILE_PATH = './data.json';

//------------const makeCommit = (n, day = 1) => {
  //------------  if (n === 0) return simpleGit().push();

    //------------const DATE = moment(`2025-01-01`).add(day, 'd').format(); // Starts from Jan 1, 2025

    //------------const data = { date: DATE };
    //------------console.log(DATE);

    //------------jsonfile.writeFile(FILE_PATH, data, () => {
        //------------simpleGit().add(['data.json', 'index.js']).commit(DATE, { '--date': DATE },
           //------------ makeCommit.bind(this, --n, day + 1)); // Increments day for each commit
    //------------});
//------------};

//------------makeCommit(10);


 //------------------ Random day in 2025----------------//

 //------------------const jsonfile = require('jsonfile');
 //------------------const moment = require('moment');
 //------------------const simpleGit = require('simple-git');

 //------------------const FILE_PATH = './data.json';

 //------------------const makeCommit = (n) => {
     //------------------if (n === 0) return simpleGit().push();

     //------------------const randomDay = Math.floor(Math.random() * 365); // Random day in 2025
     //------------------const DATE = moment('2025-01-01').add(randomDay, 'days').format(); 

     //------------------const data = { date: DATE };
     //------------------console.log(DATE);

     //------------------jsonfile.writeFile(FILE_PATH, data, () => {
         //------------------simpleGit().add(['data.json', 'index.js']).commit(DATE, { '--date': DATE },
           //------------------  makeCommit.bind(this, --n));
    //------------------ });
 //------------------};

 //------------------makeCommit(10); 
