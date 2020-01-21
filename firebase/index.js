import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: 'plantify-ea031'
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;

//adds an image under a user , default user user1
export async function addImageToDB(imageUri) {
    try {
      const imageFolder = db
        .collection('Images')
      await imageFolder.add({uri: imageUri});
      //or we can use add  instead of set to generate an doc id
      console.log('img uri was added!');
      //return newPlaylist?
    } catch (err) {
      console.log(err);
    }
}

//read images from Image collection
export async function getImages() {
    let imagesRef = db.collection('Images');
    let imageArr = [];
    try{
        let images = await imagesRef.get()
    
        if (images.empty) {
            console.log('No matching documents.');
            return imageArr;
        }  
        images.forEach(doc => {imageArr.push(doc.data())});
        console.log('images', imageArr)
        return imageArr
    }catch(err){
        console.log(err)
    }
}