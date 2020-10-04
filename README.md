# Description

When you need to authenticate a user into your application using one time password authentication,
it is rather insecure to generate an authentication code, compare it with the server code or store
it on the user's device. This is where Google Cloud Functions comes in handy.

This particular project uses three functions:
1. One that generates a one-time 4-digit password.
2. A function that verifies the generated one-time password.
3. A function that registers a new user account.
