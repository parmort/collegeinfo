# ExpressJS Starter Pack

Maybe contrary to the name, this git repo is a foundation for dynamic website
development with ExpressJS, Bootstrap, and the Pug (Formerly called Jade) templating
engine.

## Installation

1. Clone the repo using `git clone https://github.com/parvus-mortalis/expressjs_start`
or `git clone git@github.com:parvus-mortalis/expressjs_start` if you have SSH keys
set up

2. Enter the new directory and install the needed packages using
`cd expressjs_start && npm install`

3. Run the command `npm start` to start up the server

## Development

### Using the Development Server

To use the development server (through nodemon), run `npm run devstart`. This will
auto-start the dev server and continually update it while you make changes. This
is highly recommended to use when making changes. The regular start script is mainly
used in deployment services such as Heroku.

### Editing the stylesheets

To efficiently edit the stylesheets, you have to globally install the gulp package.
You can easily do this through `[sudo] npm i -g gulp`. Then, just run the command
`gulp`, and when you edit a less file, it will auto-compile.

## License

This is a free-to-use software bundle distributed under the MIT License. Users
have full rights to use this without permission.

Copr. &copy; 2017 S. Numerius. No Rights Reserved.
