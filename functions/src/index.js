/* ------------------------ External Dependencies ------------------------ */
const _ = require('lodash')
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const shortid = require('shortid');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(functions.config().sendgrid.keyprivate);
/* ------------------------- Internal Dependencies -------------------------- */
const db = require('./database');
import setupGraphQLServer from './graphql'

/*--- Timewatch ---*/
import todayEpoch from './timewatch/todayEpoch'
import todayMatch from './timewatch/todayMatch'
/* ------------------------ Initialize Dependencies ------------------------- */
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$');
admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

/* -------------------------------------------------------------------------- */

/* ------------------------ Internal Infrastructure ------------------------- */

/* -------------------------------------------------------------------------- */

/*---*---------------              ---------------*---* 

                         GraphQL 

/*---*---------------              ---------------*---*/
const graphQLServer = setupGraphQLServer()
exports.api = functions.https.onRequest(graphQLServer)

/*---*---------------              ---------------*---* 

                      Authentication 

/*---*---------------              ---------------*---*/
exports.authenticationComplete = functions.auth.user().onCreate(event => {

  const providerAccountType = {
    "google.com": 'google',
    "github.com": 'github',
    "twitter.com": 'twitter',
    "facebook.com": 'facebook',
  }[event.data.providerData.providerId]

  const person = {
    eid: event.data.uid,
    images: {
      imageProfile: event.data.photoURL
    },
    name: {
      nameDisplay: event.data.displayName,
      nameFirst: event.data.displayName,
    },
    contact: {
      contactEmail: event.data.email,
    },
    metadata: {
      metadataAccountType: providerAccountType || false
    },
    provider: event.data.providerData,
  }
  firestore.collection('people').add(person)



const msg = {
  to: 'info@kamescg.com',
  from: 'test@DEX.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
});

/*---*---------------              ---------------*---* 

                      Entity System 

/*---*---------------              ---------------*---*/

/* -------------------------------------------------------------------------- */

/* ------------------------- External API Services -------------------------- */

/* -------------------------------------------------------------------------- */
