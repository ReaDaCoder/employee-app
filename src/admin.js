import firebase from 'firebase/compat/app';
const admin = require('firebase-admin');

const serviceAccount = require('./credentailsSDK.json');
const { default: firebase } = require('firebase/compat/app');

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
});


const uid = 'some-uid';
const additionalClaims = {
    premiumAccount: true
};
 admin.auth().createCustomToken(uid, additionalClaims).then((customToken) =>{
    console.log(customToken);
}).catch((error) => {
    console.log('Error', error)
});

firebase.auth().onAuthStateChanged((user) => (this.currentUser = user));

firebase.auth().setPersistence('local');

// const db = admin.firestore();