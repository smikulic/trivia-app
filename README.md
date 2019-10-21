This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

### Trivia Game Coding Challenge

### Overview

Challenge is to create a 10 question, true or false, trivia app.

### Focus points

- Functionality
- Code Format
- Project Structure
- Scalability
- Maintainability
- Use of industry best practices

Some specific things that we are looking for:

- Typescript if you know it
- Correct implementation of a state manager
- Correct implementation of a navigation solution
- Componentization
- Communiation in the repo and/or code
- Best practices with API calls and data
- Separation of concerns between business and UI logic

### Data API

Sample returned json:

```javascript
{
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Unturned originally started as a Roblox game.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },…]}
```

## Development

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

