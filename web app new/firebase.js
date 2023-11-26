// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7_OIVsP6uo5T7qyCLui5m2Z-cW1a0Kbs",
  authDomain: "qlapp-e3f6d.firebaseapp.com",
  projectId: "qlapp-e3f6d",
  storageBucket: "qlapp-e3f6d.appspot.com",
  messagingSenderId: "270976742630",
  appId: "1:270976742630:web:5c088302c2077a41cf3727"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

var ntf= "notificaciones"

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 * @param {string} id 
  */
export const saveTask = (title, description) =>
  addDoc(collection(db, ntf), { title, description });

export const savePROD = (nombre, descripcion, imagen, precio, disp) =>
  addDoc(collection(db, "producto"), { nombre, descripcion, imagen, precio, disp  });



export const onGetTasks = (callback) =>
  onSnapshot(collection(db, ntf), callback);

  export const paraRecibirPedidos = (callback) =>
  onSnapshot(collection(db, 'pedidos'), callback);

  export const paraRecibirPedidosanteriores = (callback) =>
  onSnapshot(collection(db, 'total de pedidos'), callback);

  export const usuarios = (callback) =>
  onSnapshot(collection(db, 'usuarios'), callback);

  export const getPedidos = (callback) =>
  onSnapshot(collection(db, "notificacion"), callback);

  export const ongetProductos = (callback) =>
  onSnapshot(collection(db, "producto"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, ntf, id));
export const deleteprod = (id) => deleteDoc(doc(db, 'producto', id));
export const deleteuser = (id) => deleteDoc(doc(db, 'usuarios', id));
export const deleteped = (id) => deleteDoc(doc(db, 'pedidos', id));

export const getTask = (id) => getDoc(doc(db, ntf, id));

export const getprod = (id) => getDoc(doc(db, "producto", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, ntf, id), newFields);

export const updateProd = (id, newFields) =>
  updateDoc(doc(db, "producto", id), newFields);

export const getTasks = () => getDocs(collection(db, ntf));
export const getProduc = () => getDocs(collection(db, ntf));
