const fs = require('fs')
const book = {
    title: 'The infinite game',
    author: 'Simon Sinek'
}

//JSON to JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

//Write json data to file
fs.writeFileSync('jsonData.json' , bookJSON)

//String to JSON
const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author)

//Read File
const dataBuffer = fs.readFileSync('jsonData.json')

console.log(dataBuffer)
console.log(dataBuffer.toString())

const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)