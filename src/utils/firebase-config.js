import { initializeApp } from 'firebase';

export const initFirebase = () => {
    // configuration de firebase à récupérer dans la console firebase...
    var firebaseConfig = {
        apiKey: "xxxxxxxxxxxxxxxxxx-x-xxxxxxxxxxxxxx",
        authDomain: "xxxxxxxxxxxxxxxxxxx",
        databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxx",
        projectId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
        storageBucket: "xxxxxxxxxxxxxxxxxx",
        messagingSenderId: "xxxxxxxxxxxxxxxxx",
        appId: "xxxxxxxxxxxxxxxxxxxxxxxx"
      };

      initializeApp(firebaseConfig);
}