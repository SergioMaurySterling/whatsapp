import '../styles/globals.css'
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth,db} from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import Login from './Login';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {
  const [user, loading]=useAuthState(auth);

  useEffect(() => {
    try {
      if(user) {
        addDoc(collection(db, "users"),{
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },{merge: true});
      }
    } catch (error) {
      console.error(error);
    }
  },[user])

  if(loading) return <Loading />
  if (!user) return <Login/>;

  return <Component {...pageProps} />
}

export default MyApp
