# Posum


## Getting started
Clone the repository:

```sh
npm install
npm run dev
Browse to http://localhost:8080
```


##Live Reload

In `App` you'll find the single page reach app. Try opening `Components/Header.js' and modifying the text. Hit save and the browser should update with your changes.

In `Server` you'll find a minimal express server. Currently it serves content from the build directory and has 1 api call to get the current time.

Try adding a new api endpoint and modify `Components/Content.js` so that it hits your new endpoint.

You should be able to make all these changes without restarting the server manually as it should auto detect the changes and restart/reload as necessary.

## Running in Development Mode
```sh
npm run dev
```
This will start the webpack dev server on the defuault port (8080). It will also start the express server from `server/index.js` using nodemon.

Webpack dev server will watch for changes in the files from the `App` folder and hot load any changed modules.

nodemon will watch files in the `server` folder and restart the express server if any files change.

This means that you can update both your single page app and your backend during development and have the changes available immediately.

## Building for Production
```sh
npm run build
```
This will build the app and output the files to the `build` directory.
## Running the server
```sh
npm run start
```
This will launch the express server serving content from `build`

## Testing
Testing is done using karma + mocha with sinon for stubbing ajax requests. We use the [karma-webpack preprocessor](https://github.com/webpack/karma-webpack)

The karma config lives in `karma.conf.js` and is setup to run tests in Chrome and load up `tests.webpack.js`

`tests.webpack.js` loads up all the tests from the `tests` directory and bundles them all up using webpack. We then run them all at once.

To do a test run:

```sh
npm test
```

And to run continuous tests which rerun everytime a file changes:

```sh
npm run testing
```

