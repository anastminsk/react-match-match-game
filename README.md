The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# react-match-match-game

## used react-redux basic tools

### npm install -> npm start -> localhost:3000

### requirements

Rewrite [match-match-game](https://github.com/rolling-scopes-school/tasks/blob/2018-Q1/tasks/match-match-game.md) using react, redux and other tools you've learnt about on react-redux lectures.
 Follow requirements described [here](https://github.com/rolling-scopes-school/tasks/blob/2018-Q1/tasks/match-match-game.md) with some exceptions:
 * don't use localStorage for scoreboard data
 * scoreboard data should be requested from API
 * new score result should be sent to API where it will be saved
 
 Scoreboard is shared and everyone can add score result
 
 API endpoints:
 * GET http://mmg-score.herokuapp.com - get all results
 * POST http://mmg-score.herokuapp.com - save single score result
 
 POST body format:
 ```ts
 {
   username: string
   email: string
   score: number
 }
 ```
 
 response format:
 ```ts
 {
   error: { code: number } // zero code is no error
   result: any // response data will be here, array of results or single result which is saved
   links: Array<Metalink> // metalinks with available endpoints
   message: any // response message
 }
 ```