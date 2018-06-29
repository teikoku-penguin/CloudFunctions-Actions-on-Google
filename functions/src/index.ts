'use strict'

import * as functions from 'firebase-functions';
import * as actions_on_google from 'actions-on-google';

const app = actions_on_google.dialogflow();

app.intent('今の時間を教えて', conv => {
    const date = new Date();
    const nowTime = "現在の時刻は" + (date.getHours() + 9) + "時" + date.getMinutes() + "分" + "です";
    conv.ask(nowTime);
})

exports.anctions_on_google = functions.https.onRequest(app);