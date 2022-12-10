import * as firebase from 'firebase';
import '../credentials';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: ApiKey,
    authDomain: AuthDomain,
    databaseURL: DatabaseURL,
    projectId: ProjectId,
    storageBucket: StorageBucket,
    messagingSenderId: MessagingSenderId,
    appId: AppId,
    measurementId: MeasurementId
  };

  firebase.initializeApp(config);

  export default firebase;