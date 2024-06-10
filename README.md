# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Deployment

### Updating `gh-pages` Branch for GitHub Pages Deployment

To ensure that your changes are reflected on the deployed page hosted on GitHub, follow these steps:

#### 1. Configure `package.json`

Ensure that your `package.json` file is configured as follows:

```json
{
  "homepage": "https://ameaaira00.github.io/AL2GraciousLendingCorp",
  "name": "mama-website-loan",
  ...
  },
  "scripts": {
    "start": "react-scripts start",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
}
```

#### 2. Install `gh-pages`

First, install `gh-pages` as a development dependency by running:

```
npm install gh-pages --save-dev
```

#### 3. Deploy Changes

Once `gh-pages` is installed, deploy your changes to the `gh-pages` branch by executing:

```
npm run deploy
```

This command will automatically build your React application and push the generated build files to the `gh-pages` branch. After a successful deployment, your changes will be reflected on the deployed page hosted on GitHub.
