import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { Product } from "./interface/interfaces";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialaize Realtime Database
const db = getDatabase(app);

//Initialize Firestore
const firestore = getFirestore(app);

//  Firestore collection ref
export const productsCollectionRef = collection(firestore, "products");

// Get Firebase Collection docs
export async function getProductsArray() {
  return await getDocs(productsCollectionRef).then((docs) => {
    const products: Product[] = [];
    docs.forEach((doc) =>
      products.push({ ...doc.data(), id: doc.id } as Product)
    );
    return products;
  });
}

export async function deleteProductFromFirebase(product: Product) {
  const productDoc = doc(firestore, "products", product.id.toString());
  return deleteDoc(productDoc);
}

export const storage = getStorage(app);

export const exportImageAndGetURL = async (file: File) => {
  const storageFolderName = "images/";
  const filePath = storageFolderName + file.name;
  const fileRef = ref(storage, filePath);

  return await uploadBytes(fileRef, file).then(
    (res) => getDownloadURL(fileRef),
    (error) => console.log(error)
  );
};
