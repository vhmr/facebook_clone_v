import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider }  from './firebase' 
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {

    const [state, dispatch] = useStateValue()

    const signin = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                    alt="face"
                />

                <img 
                    src="http://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png"
                    alt="face"
                />
            </div>
            <Button type="submit" onClick={signin}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
