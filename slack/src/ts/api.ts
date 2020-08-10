const axios = require('axios')
import slackConfig from '../configration/slackConfig.json';
const TOKEN_CONFIG_KEY = "slack-api-key"


const Instance = axios.create({
    baseURL: `https://slack.com/api`,
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json'
})

export function callUserListAPI(success: (response: any) => void, failed: (err: any) => void) {
    const userProfileURL = "/users.list?token=" + slackConfig[TOKEN_CONFIG_KEY]
    Instance(userProfileURL).then(function (response: any) {
            success(response.data)
        })
        .catch(function (err: any) {
            failed(err)
        });
}

export function callUsersProfileAPI(userID: string, success: (userID: string, response: any) => void, failed: (err: any) => void) {
    let userListURL: string = "users.profile.get?token=" + slackConfig[TOKEN_CONFIG_KEY] + "&user=" + userID
    Instance(userListURL)
        .then(function (response: any)  {
            success(userID, response.data)
        })
        .catch(function (err: any){
            failed(err)
        });
}