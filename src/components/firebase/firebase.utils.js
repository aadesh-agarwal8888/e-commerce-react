import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLJPawFms6uEyvWrbW6hRWcp7QjsWTSwc",
    authDomain: "e-commerce-1223e.firebaseapp.com",
    databaseURL: "https://e-commerce-1223e.firebaseio.com",
    projectId: "e-commerce-1223e",
    storageBucket: "e-commerce-1223e.appspot.com",
    messagingSenderId: "549254481550",
    appId: "1:549254481550:web:7b2d2d95db03dad1e36bdf",
    measurementId: "G-H46BJYRDCY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });
        console.log('Done')
        } catch(error) {
            console.log("Error Occured", error.message);
        }
    }

    return userRef;

};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompts: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
};