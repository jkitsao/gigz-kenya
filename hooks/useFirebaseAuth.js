import { useState, useEffect } from 'react'
import { firebase } from '../config/firebase';
import { useRouter } from 'next/router'
import { addNewUser } from '../endpoints/users';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email,
    name: user?.displayName,
    photo: user?.photoURL
});
// const provider = new GoogleAuthProvider();

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(undefined)
    const router = useRouter()
    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return;
        }
        setLoading(true)
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        //check if user is new
        const isNewUser = authState.metadata.creationTime === authState.metadata.lastSignInTime
        // console.log({ isNewUser })
        if (isNewUser) {
            const userObj = {
                uid: authState.uid,
                email: authState.email,
                name: authState?.displayName,
                photo: authState?.photoURL,
                role: 'admin'
            }
            await addNewUser(userObj)
            //    setCurrentUser(userbase)
        }
        setLoading(false);
    };

    // listen for Firebase state change
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);
    //helper functions
    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    };
    const signOut = () =>
        firebase.auth().signOut().then(clear);
    // google signup
    const signUpWithGoogle = () => {
        // alert('clicked')
        const provider = new GoogleAuthProvider();
        signInWithPopup(firebase.auth(), provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                router.push('/dashboard')
                console.log({ user })
                // ...
            }).catch((error) => {
                console.error(error)

            });
    }

    return {
        authUser,
        loading,
        signOut,
        signUpWithGoogle
    };
}