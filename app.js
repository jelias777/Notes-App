const yargs = require('yargs')
const notes = require('./notes/note')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
        console.log('Title: ' + argv.title + ' Body: ' + argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'delete',
    describe: 'Delete a note',
    handler: () => {
        console.log('Deleting a note')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading a note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your nodes',
    handler: () => {
        console.log('Listing out all notes')
    }
})

yargs.parse()