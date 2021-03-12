import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA0KLU036xKZWSdoyg1ad0UbLB9ZDCMsaI",
  authDomain: "panier-achats-mickyelloow.firebaseapp.com",
  databaseURL: "https://panier-achats-mickyelloow-default-rtdb.firebaseio.com",
  projectId: "panier-achats-mickyelloow",
  storageBucket: "panier-achats-mickyelloow.appspot.com",
  messagingSenderId: "422473451568",
  appId: "1:422473451568:web:dbf4200993bf3c293d45f5"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;