import '../styles/globals.css'
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth,db} from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Login from './Login';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {
  const [user, loading]=useAuthState(auth);

  useEffect(() => {
    if(user){
      addDoc(collection(db, "cities"), {
        email: user.email,
        lastSeen: serverTimestamp(),
        photoURL: user.photoURL,
      });
    }
  },[user])

  if(loading) return <Loading />
  if (!user) return <Login/>;

  return <Component {...pageProps} />
}

export default MyApp