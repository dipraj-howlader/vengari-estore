import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Button } from '@material-ui/core';
import Header from '../Header/Header';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {



    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/home" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSingIn = () => {

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                const user = result.user;
                const { displayName, email } = user;
                const signInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                // console.log("Sign form log",signInUser);
                setLoggedInUser(signInUser);
                history.replace(from);

            }).catch(err => {
                console.log(err);
                console.log(err.massage);
            });

    }

    //handle Change

    const handleChange = (e) => {
        let isFormVaild = true;

        if (e.target.name === 'email') {
            isFormVaild = /\S+@\S+\.\S+/.test(e.target.value);


        }
        if (e.target.name === 'password') {
            isFormVaild = e.target.value.length > 6 && /[a-z]\d|\d[a-z]/i.test(e.target.value)

        }
        if (isFormVaild) {
            const newUserInfo = { ...loggedInUser };

            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }

    }
    const handleSubmit = (e) => {
        // console.log(user.email , user.password);
        if (newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    newUserInfo.name = loggedInUser.name;
                    newUserInfo.error = '';
                    setLoggedInUser(newUserInfo);
                    updateUserName(loggedInUser.name);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = '';
                    setLoggedInUser(newUserInfo);


                    // ..
                })

        }

        if (!newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    newUserInfo.error = '';
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = '';
                    setLoggedInUser(newUserInfo);
                });
        }

        e.preventDefault();
    }
    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            // Update successful.
            console.log('User Name Updated successfully');
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });
    }

    return (
        <div>
            <div>
            <Header></Header>
            </div>
            <div style={{
            backgroundColor: 'black',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            paddingBottom: '120px',
            paddingTop: '60px',
            fontFamily: 'CourierNew'

            }}>
            <div>
                {newUser ? <h1>Create an Account</h1> : <h1>Log In</h1>}
                {
                    loggedInUser.success && <p style={{ color: 'white' }}> User {newUser ? 'created' : 'Logged In'} Successfully </p>
                }
                <form onSubmit={handleSubmit} >
                    {newUser && <input style={{ width: '300px', height: '35px', border: '1px solid whitesmoke', borderRadius: '5px', padding: '5px', margin: '8px' }} type="text" name="name" onBlur={handleChange} placeholder="Name" />
                    }
                    <br />
                    <input style={{ width: '300px', height: '35px', border: '1px solid whitesmoke', borderRadius: '5px', padding: '5px', margin: '8px' }} type="text" name="email" onBlur={handleChange} placeholder="Email" required />
                    <br />
                    <input style={{ width: '300px', height: '35px', border: '1px solid whitesmoke', borderRadius: '5px', padding: '5px', margin: '8px' }} type="password" onBlur={handleChange} name="password" placeholder="Password" required />
                    <br />
                    <input style={{ width: '300px', height: '40px', border: '1px solid whitesmoke', borderRadius: '5px', padding: '5px', margin: '8px', textAlign: 'center' }} type="submit" value={newUser ? 'Sign Up' : 'Log In'} />
                </form>
                <p>Don't have any Account?</p>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser"><small>Sing Up</small> </label>
                <p style={{ color: 'white' }}>{loggedInUser.error}</p>



            </div>
            <div>
                <p style={{ color: 'blue' }}>---------or---------</p>
                <Button onClick={handleGoogleSingIn} variant="outlined" color="primary">
                    Continue with Google
                </Button>
            </div>
            <div style={{marginTop:'50px'}}>
                <footer>
                    <p>
                        <small>
                          Developed by Dipraj  
                        </small>
                        
                    </p>
                </footer>
            </div>
        </div>
        </div>
    );
};

export default Login;