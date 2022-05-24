const fs =require('fs').promises;


const contents = 'Nice to meet you';
fs.writeFile('./msg.txt', contents);


