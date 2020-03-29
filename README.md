# Semana Omnistack-11
A repository for the *Be the hero* project implemented during the course *Semana Omnistack 11* (23-29/03/2020).

## What *Be the hero* is about
A initiative to assist local help associations in finding people that could be interested in funding good actions.

## Repository content
- React frontend
- React Native app
- Node.js backend

## Built With
### Backend:
* [Node.js](https://github.com/nodejs/node) - JavaScript runtime;
* [Express](https://github.com/expressjs/express) - A minimal webframework fro Node;
* [cors](https://github.com/expressjs/cors) - For cross-origin resource sharing;
* [Nodemon](https://github.com/remy/nodemon) - Live Reload on backend development;
* [Knex](https://github.com/knex/knex) - SQL query builder;
* [cross-env](https://github.com/kentcdodds/cross-env) -  For environment variables;
* [celebration](https://github.com/arb/celebrate) - Validation middleware for Express;
* [Jest](https://github.com/facebook/jest) - JavaSript Testing;
* [supertest](https://github.com/visionmedia/supertest) - For testing HTTP requests;

### Frontend:
* [React](https://github.com/facebook/react) - User interface building;
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - Routing;
* [Axios](https://github.com/axios/axios) - HTTP client for the browser;
* [react-icons](https://github.com/react-icons/react-icons) - Icon pack;

### Mobile:
* [React Native](https://github.com/facebook/react-native) - Mobile apps using React;
* [Expo](https://github.com/expo/expo) - Easy port of React Native apps to mobile;
* [@react-navigation/stack](https://github.com/react-navigation/stack) - Stack navigation;

## Running the application locally
### 1 - Set the backend up:
```
cd backend
npm install
```
once installed:
```
npm start
```
You can chek the server running by acessing http://localhost:3333/incidents on the browser.
Now you can chose to run the web frontend or the mobile app.

### 2 - Running the web frontend:
```
cd frontend
npm install
```
and once installed:
```
npm start
```
You can check the fronend running by acessing http://localhost:3000 on the browser and using '8d4d8025' as an example ID.

### 3- Running the mobile app:
First you'll have to install the [Expo app](https://play.google.com/store/apps/details?id=host.exp.exponent) on your phone.
Then run:
```
cd mobile
npm install
```
So once installed you can run:
```
npm start
```
Lastly, scan the generated QR code at http://localhost:19002 using the Expo app on your phone.


## Running backend tests
To run the tests you just have to execute these commands:
```
cd backend
npm test
```

