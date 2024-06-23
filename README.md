# Shopping List
A simple shopping list web application made with Vue.js and PouchDB with "Offline First" approach. The application is a PWA (Progressive Web App) and can be installed on your device.

The list and items are stored in the browser's local storage and can be accessed offline. The data can also be synced with a remote CouchDB server.
## Run Locally

- [Shopping List](#shopping-list)
  - [Run Locally](#run-locally)
    - [1. Install Prerequisites](#1-install-prerequisites)
    - [2. Start the Server](#2-start-the-server)
  - [Run Tests](#run-tests)

### 1. Install Prerequisites

Install prerequisites (we assume [Node.js](https://nodejs.org/) is already installed):

```bash
npm install 
```
### 2. Start the Server
Start the application locally at `http://127.0.0.1:8081` with this command:

```bash
npm start
```

## Run Tests

Run the tests with this command:

```bash
npm test
```