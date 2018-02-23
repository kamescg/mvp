import { all } from 'redux-saga/effects';

import authentication from './authentication/sagas'
import database from './database/sagas'
import firestore from './firestore/sagas'
import notifications from './notifications/sagas'
import storage from './storage/sagas'

// Blockchain Integrations
import symbiosis from 'assimilation/symbiosis/sagas'
export default function* rootSaga() {
  yield all([
    authentication(),
    database(),
    firestore(),
    notifications(),
    storage(),
    ...symbiosis
  ]);
}