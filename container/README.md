# Container

## Pre-Requisites

You **must** use a node version < 15 to run this app.

### Environment Variables

You must add the following environment variables:

- `NEXT_PUBLIC_BACKEND_URL`: the API url
- `NEXT_PUBLIC_TEST_URL`: The URL where the app is running on. This environment variable is only used when running `yarn test`
- `NEXT_PUBLIC_TRACKING_ID`: the Google Analytics tracking ID

You can copy and paste the code below into a new `.env.development` file. Fill in any required and missing environment variables.

```
NEXT_PUBLIC_BACKEND_URL=https://a937326c-3ec8-454c-a4ff-7fbca621d9f5.mock.pstmn.io
NEXT_PUBLIC_TEST_URL=http://localhost:3000
NEXT_PUBLIC_TRACKING_ID=http://localhost:5000
```

## Running tests

Start the backend. Then, create a new file named `.env.test` with the following:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
NEXT_PUBLIC_TRACKING_ID=http://localhost:5000
NEXT_PUBLIC_TEST_URL=http://localhost:3000
```

Change these environment variables as needed. Then, set the `NODE_ENV` environment variable to `TEST` and start the development sever.

```bash
yarn develop
```

Finally, start the test runner:

```bash
yarn test
```

## Scripts

Once you switch to the microfrontend's folder, you can run the following scripts:

### Install Packages

```bash
yarn install
```

### Backend Server

If you are using the mock backend server (the Postman URL), not all features will work. Specifically, requests to create items will not work.

### Start Server

Start the server and open http://localhost:3000.

```bash
yarn develop
```

## File Structure

The following is the folder structure of the `src` directory:

- Each page has its own folder inside of the `src` directory.
- `__tests__`: Contain the app's global component / end-to-end tests (not unit tests).
- `actions`: Redux action creators
- `api`: Functions to make API requests
- `components`: Global components (i.e components that are shared across pages)
- `config`: App configuration, such as environment variables
- `constants`: Hard-coded constant variables that are shared across pages
- `contexts`: Custom React contexts
- `hooks`: Custom React hooks
- `reducers`: Redux reducers. They are reponsible for reducing most of the API's data.
- `repos`: Utility classes that help make API requests and interact with API data
- `styles`: Shared style functions for Material UI
- `tests`: Test utilities
- `types`: Contain global types
- `utils`: utility functions, such as formatters and validators
