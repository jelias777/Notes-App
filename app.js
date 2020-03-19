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
    }
})

//Create remove command
yargs.command({
    command: 'delete',
    describe: 'Delete a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.deleteNote(argv.title)
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
    command: 'listNotes',
    describe: 'List your nodes',
    handler: () => {
        notes.getNotes()
    }
})

yargs.parse()