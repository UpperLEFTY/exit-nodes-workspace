This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm run start:docker`

You should run this command if they want to spin out the application.
Runs the app in the development mode in a docker container.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build:docker`

This command allows you to build the exit-nodes-workspace application within a docker container.
This script should be ran before launching the application with 'npm start:docker'.

### `npm run clean:docker`

This command cleans your docker images. This command should be run whenever you pull a branch into your branch or need to run an npm install. Run this before running 'npm build:docker'. A clean branch prevents module errors when running 'npm start:docker'

### `npm run lint`

This command runs the linter. The linter fixes coding errors and provides syntax formatting. Please run this command before making any PR's into master. The command ensures the readability and overall standards of the code.

### `npm run test`

This command launches jest test runner which runs the full suite of tests in the repository.<br />
See react testing library (https://testing-library.com/docs/react-testing-library/api) for more information.

### `npm run test:snap`

This command launches jest test runner and the jest testing snapshots. Snapshots are visible in the **snapshots** folder which is located in the app/src/components folder. For more information on jest snapshots see: (https://jestjs.io/docs/snapshot-testing)

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Exit-Nodes common build issues

 When running `exit-nodes-workspace`
 if your local build keeps refreshing the same state,
 try the following:

 - Try restarting your machince.
 - Clearing cookies or clearing your cache.

    - `npm cache clean --force`

 - Finally if the steps above fail, try the commands below.
 - Docker commands must be run in the order listed below.

    - `clean:docker: docker compose down --remove-orphans --volumes --rmi local`,
     _(Stops containers and removes containers, networks, volumes, and images created by `up`)_

   - `build:docker: docker compose build`,
     _(Builds the services in the docker-compose.yml file)_,

   - `start:docker: docker compose up --remove-orphans`,
     _(Command cleans orphan containers)_,



## Testing

For general front-end testing I use react testing-library in accordance with jest to run my react test cases.

Documentation for [Testing Library React](https://testing-library.com/docs/).

The Testing-Library React [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/) provides additional information regarding built in API methods that you can utilize for creating unit test cases.

Additionally .test.js files are marked clearly to aviod confusion.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

