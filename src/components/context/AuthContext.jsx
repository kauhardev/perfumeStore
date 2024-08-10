import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../../fireBase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USER":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  let googleProvider = new GoogleAuthProvider()
  async function signInWithGoogle() {
    try {
      return await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log(error.message);
      
    }
    
  }

  function LogIn(email,password){
    return signInWithEmailAndPassword(auth ,email,password)
  }

  function logOut(){
    return signOut(auth)
  }


  function getUser(){
    return onAuthStateChanged(auth, (user) => {
      dispatch({type: 'GET_USER', payload: user})
    })
  }

  useEffect(() => {
    getUser()
  },[])

  let values ={
    register,
    signInWithGoogle,
    user:state.user,
    LogIn,
    logOut
  }

  return(
    <authContext.Provider value={values}>
{children}
    </authContext.Provider>
  )





};

export default AuthContext;
