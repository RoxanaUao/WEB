  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc, 
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDATJu1uU_aGpjVsC-_liXoxGjXelhvN30",
    authDomain: "proyectomobil-16774.firebaseapp.com",
    projectId: "proyectomobil-16774",
    storageBucket: "proyectomobil-16774.appspot.com",
    messagingSenderId: "696619715372",
    appId: "1:696619715372:web:392ebb761f73d556cbfa89",
    measurementId: "G-SJQ2FWPYW0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
/**
 * Save a New alumno in Firestore
 * @param {string} nombre the title of the Task
 * @param {string} padre the description of the Task
 * @param {string} grado the description of the Task
 * @param {string} carril the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });
  
export const saveAlumno = (nombre, grado, padre, carril) =>
  addDoc(collection(db, "alumnos"), { nombre, grado, padre, carril });
//metodos para lamar datos
export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const onGetAlumnos = (callback) =>
  onSnapshot(collection(db, "alumnos"), callback);

export const getTasks = () => getDocs(collection(db, "tasks"));
export const getAlumnos = () => getDocs(collection(db, "alumnos"));
/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

