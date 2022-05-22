import { createContext, useContext,useState,useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState({})
    const signUp = (email,password)=> createUserWithEmailAndPassword(auth,email,password)
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
        <AuthContext.Provider value={{signUp,logIn,logOut,user}} >
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=> useContext(AuthContext)