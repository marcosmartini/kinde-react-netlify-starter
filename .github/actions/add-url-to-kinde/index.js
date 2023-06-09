const axios = require("axios");

const APP_ID = process.env.APP_ID;
const BUSINESS_DOMAIN = process.env.BUSINESS_DOMAIN;
const M2M_CLIENT_ID = process.env.M2M_CLIENT_ID;
const M2M_CLIENT_SECRET = process.env.M2M_CLIENT_SECRET;
const ENVIRONMENT = process.env.ENVIRONMENT;
const ENVIRONMENT_URL = process.env.ENVIRONMENT_URL;

if (ENVIRONMENT === "Preview") {
  axios({
    method: "POST",
    url: `${BUSINESS_DOMAIN}/oauth2/token`,
    data: {
      client_id: M2M_CLIENT_ID,
      client_secret: M2M_CLIENT_SECRET,
      grant_type: "client_credentials",
      audience: `${BUSINESS_DOMAIN}/api`,
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return axios({
        method: "post",
        url: `${BUSINESS_DOMAIN}/api/v1/applications/${APP_ID}/auth_redirect_urls`,
        headers: {
          Authorization: `Bearer ${response.data.access_token}`,
          Accept: "application/json",
        },
        data: {
          urls: [`${ENVIRONMENT_URL}/api/auth/kinde_callback`],
        },
      })
        .then(function (response) {
          console.log(`Environment is ${ENVIRONMENT}: Adding ${ENVIRONMENT_URL} to Kinde.`);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
} else {
  console.log(
    `Environment is ${ENVIRONMENT}: Ignoring ${ENVIRONMENT_URL} as production is up to date.`
  );
}
