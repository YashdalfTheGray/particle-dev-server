# particle-dev-server
Uses a devices file as the base to mock the Particle API for testing.

## Design

The idea is to use this package globally like `npm install --global particle-dev-server` and give it a file which will define the mock Particle API data.

We should be able to run `particle-dev-server schemaFile.js` and get an API started. 

## Development

Clone the repository and then run `npm install` to pull down all the dependencies. Once installed, run `npm test` to run the unit tests and `npm start` to start the server.
