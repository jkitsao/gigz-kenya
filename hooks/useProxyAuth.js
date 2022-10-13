import React, { useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebase } from '../config/firebase';
import { proxy, useSnapshot } from 'valtio'
//format  user function
const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email,
    name: user?.displayName,
    photo: user?.photoURL
});

const state = proxy({ authUser: null })
//
// declare state
function useProxyAuth() {
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            // console.log("onAuthStateChanged called: ", user);
            if (user) {
                state.authUser = formatAuthUser(user)
            }
        });
    }, [])
    const snap = useSnapshot(state)
    return {
        snap
    }

}

export default useProxyAuth