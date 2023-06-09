# Kinde React Netlify Starter

## Do you want to see your Kinde app live with Netlify in less than 5 minutes?

### 1. Register an account on Kinde

To get started set up an account on [Kinde](https://app.kinde.com/register).

### 2. Get your app details

- In the Kinde dashboard, go to `Settings` > `Applications`
- Click `Add application` to add a `SPA` app or click `View details` under an already created `SPA` app
- You will only need `Domain` and `Client ID`. These can be found under `App keys`

### 3. Deploy to Netlify

- By clicking the `Deploy to Netlify` button below, you will connect your `Github` account and enter the `Domain` and `Client ID` you copied in the step above.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/marcosmartini/kinde-react-netlify-starter)

### 4. Set your Callback and Logout URLs

- When Netlify is done deploying your app, make sure to copy the generated app URL and enter it under `Callback URLs` in your app details in the Kinde dashboard, both for `Allowed callback URLs` and for `Allowed logout redirect URLs`

> Important! This is required for your users to successfully log in to your app.

## Working locally

### 1. Required environment variables

Make a copy of `.env_sample` and name it simply `.env`. Set the following values from the Kinde `Settings -> Applications -> Frontend app` page.

- `REACT_APP_KINDE_DOMAIN` with the `Domain` value
- `REACT_APP_KINDE_CLIENT_ID` with the `Client ID` value

e.g

```
REACT_APP_KINDE_CLIENT_ID=your_client_id
REACT_APP_KINDE_DOMAIN=https://your_kinde_subdomain.kinde.com
```

### 2. Set your development Callback and Logout URLs

Your user will be redirected to Kinde to authenticate. After they have logged in or registered they will be redirected back to your React application.

You need to specify in Kinde which URL you would like your user to be redirected to in order to authenticate your app.

On the `Settings -> Applications -> Frontend app` page set `Allowed callback URLs` to `http://localhost:3000`

> Important! This is required for your users to successfully log in to your app.

You will also need to set the url they will be redirected to upon logout. Set the ` Allowed logout redirect URLs` to http://localhost:3000.

### 3. Start your app

Run `npm start` in a terminal and navigate to `http://localhost:3000`.

Click on `Sign up` and register your first user for your business!

### 4. View users in Kinde

If you navigate to the "Users" page within Kinde you will see your newly registered user there. 🚀
