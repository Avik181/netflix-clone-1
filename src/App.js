import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login,logout, selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
import ProfileScreen from './ProfileScreen';


function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(()=>{
 const unsubscribe = auth.onAuthStateChanged(userAuth => {
   if(userAuth) {
      dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email,
      }))
   } else{
      dispatch(logout());
   }
 });

 return unsubscribe;
}, [dispatch])
  return (
    <div className="App">
      
      {!user? (<LoginScreen />) : (
          <>
           <ProfileScreen />
          <HomeScreen />
          </>
          
        )}
      
    
    </div>
  );
}

export default App;
