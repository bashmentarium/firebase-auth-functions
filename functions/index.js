const admin = require('firebase-admin')
const functions = require('firebase-functions')
const createUser = require('./create-user')
const serviceAccount = require('./service.json')
const requestOTP = require('./request_OTP')
const verifyOTP = require('./verify_OTP')
const dbUrl = require('../utils/dbUrl')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbUrl,
})

exports.createUser = functions.https.onRequest(createUser)
exports.requestOneTimePassword = functions.https.onRequest(requestOTP)
exports.verifyOTP = functions.https.onRequest(verifyOTP)
