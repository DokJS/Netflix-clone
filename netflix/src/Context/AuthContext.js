import { createContext, useContext,useState,useEffect } from "react";
import { auth,db } from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { doc,setDoc } from "firebase/firestore";
const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState({})
    const signUp = async (email,password)=>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, 'users', email), {
                savedShows: []
            })
            console.log('utilisateur crée')
        }catch(error){
            console.log(error)
        }
       
    }
    const logOut = ()=> signOut(auth)
    const logIn = (email,password)=> signInWithEmailAndPassword(auth,email,password)

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth,authUser=>{
            setUser(authUser)
        })
        return ()=> {
            unsuscribe()
        }
    },[])
    return(
        <AuthContext.Provider value={{signUp,logIn,logOut,user,setUser}} >
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=> useContext(AuthContext)