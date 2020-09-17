const admin = require('firebase-admin')
const functions = require('firebase-functions')
const createUser = require('./create-user')
const serviceAccount = require('./service.json')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://otpa-ebded.firebaseio.com',
})

exports.createUser = functions.https.onRequest(createUser)
