const fs = require('fs')
const book = {
    title: 'The infinite game',
    author: 'Simon Sinek'
}

//JSON to JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON);
fs.writeFileSync('jsonData.json' , bookJSON)

//String to JSON
const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author)