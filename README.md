# Notes-App
Node.js application, example of how to use file system module

## Requirements

- node.js 12.16.x
- npm 6.13.X

## Dependencies

- chalk 3.0.0
- validator 12.0.0
- yargs 15.3.1

## Building

Install the dependencies before start:

```sh
$ cd notes-app
$ sudo npm install
```

## Run the Application

Add a note:

```sh
$ node app.js add --title=<title-of-the-note> --body=<body-of-the-note>
```

Remove a note:

```sh
$ node app.js remove --title=<title-of-the-note>
```

Read a note:

```sh
$ node app.js read --title=<title-of-the-note>
```

List all the notes:

```sh
$ node app.js listNotes
```
