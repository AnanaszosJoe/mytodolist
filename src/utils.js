
import { db } from './firebaseApp'
import { collection, onSnapshot } from 'firebase/firestore'

export const readTodos = (setTodos) => {
    
    const todolistRef = collection(db,'mytodolist')
    const unsubscribe = onSnapshot(todolistRef, (snapshot)=>{
        setTodos(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
        console.log(snapshot.docs);
    })
    return ()=>unsubscribe() //erőforrásigényes műveletek miatti törlés
}