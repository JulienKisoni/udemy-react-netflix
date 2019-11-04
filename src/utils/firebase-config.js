import { initializeApp } from 'firebase';

export const initFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyCtHNVDZAKuBdLdRsjaqc-b-YSFJhtxyzw",
        authDomain: "mini-netflix-6a431.firebaseapp.com",
        databaseURL: "https://mini-netflix-6a431.firebaseio.com",
        projectId: "mini-netflix-6a431",
        storageBucket: "mini-netflix-6a431.appspot.com",
        messagingSenderId: "257120485624",
        appId: "1:257120485624:web:acc62e9c03a0f7372cfb0d"
      };

      initializeApp(firebaseConfig);
}