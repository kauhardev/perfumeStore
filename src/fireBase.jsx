import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuwCmKYDP_ZhoNito526L1ArAFg9Au1J8",
  authDomain: "perfumestore-cc66c.firebaseapp.com",
  projectId: "perfumestore-cc66c",
  storageBucket: "perfumestore-cc66c.appspot.com",
  messagingSenderId: "196178708239",
  appId: "1:196178708239:web:c0c98cbfaac0aca483607a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app