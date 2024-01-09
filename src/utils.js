
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from './firebaseApp'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore'

export const readTodos = (setTodos) => {
    
    const todolistRef = collection(db,'mytodolist')
    const q=query(todolistRef, orderBy('timestamp', 'desc'))
    onSnapshot(todolistRef, (snapshot)=>{
        setTodos(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
        console.log(snapshot.docs);
    })
}

//autentikációhoz kell:
export const signIn = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password)
    } catch(err){
        console.log(err);
    }
}

//eseményfigyelő:
export const getCurrentUser = (setUser) =>{
    onAuthStateChanged(auth, (current)=>setUser(current))
}

//kijelentkezéshez
export const signOutUser = async() => {
    await signOut(auth)
}

export const toggleDone = async (id, done) =>{
    const docRef = doc(db, 'mytodolist', id)
    await updateDoc(docRef, {done})
}

export const addingNewTodo = async (newTodo) => {
    const collectionRef = collection(db, 'mytodolist')
    const newTodoka={
        desc:newTodo,
        done:false,
        timestamp:serverTimestamp()
    }
    await addDoc(collectionRef, newTodoka)
}

export const deleteTodo = async (id) => {
    const docRef = doc (db, 'mytodolist', id)
    await deleteDoc(docRef)
}