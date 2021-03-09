const axios = require('axios')
import slackConfig from '../configration/slackConfig.json';
const TOKEN_CONFIG_KEY = "slack-api-key"


const Instance = axios.create({
    baseURL: `https://slack.com/api`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    responseType: 'json'
})

const tokenParams = new URLSearchParams();
tokenParams.append("token", slackConfig[TOKEN_CONFIG_KEY])

export function callUserListAPI(success: (response: any) => void, failed: (err: any) => void) {
    const userListURL = "/users.list"
    Instance.post(userListURL, tokenParams).then(function (response: any) {
            success(response.data)
        })
        .catch(function (err: any) {
            failed(err)
        });
}

export function callUsersProfileAPI(userID: string, success: (userID: string, response: any) => void, failed: (err: any) => void) {
    let userProfileURL: string = "users.profile.get?user=" + userID
    Instance.post(userProfileURL, tokenParams)
        .then(function (response: any)  {
            success(userID, response.data)
        })
        .catch(function (err: any){
            failed(err)
        });
}

export function callUsersGetPresenceAPI(userID: string, success: (userID: string, response: any) => void, failed: (err: any) => void) {
    let userProfileURL: string = "users.getPresence?user=" + userID
    Instance.post(userProfileURL, tokenParams)
        .then(function (response: any) {
            success(userID, response.data)
        })
        .catch(function (err: any) {
            failed(err)
        });
}