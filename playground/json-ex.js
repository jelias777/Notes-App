//Load and parse json data
const dataBuffer = fs.readFileSync('file.json')
const dataJSON = dataBuffer.toString()

//change name and age properties
const user = JSON.parse(dataJSON)

user.name = 'Alfonso'
user.age = 54

//Stringify the changed object
const userJSON = JSON.stringify(user)

//Overwrite the original data
fs.writeFileSync('file.json' , userJSON)