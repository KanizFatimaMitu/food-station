import React, { useCallback, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const PhoneAuth = (props) => {

    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);
        ui.start('.phone-container', {
            signInOptions: [
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: 'https://github.com/KanizFatimaMitu',
            // privacyPolicyUrl : '/'
        })
    })


    return (
        <div className='phone-container'>
            <h1>Verification</h1>
        </div>
    );
};

export default PhoneAuth;