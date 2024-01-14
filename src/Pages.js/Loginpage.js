import React from 'react'
import { useState } from 'react'
import Loginheader from '../Components/Login-header'
import { Link } from 'react-router-dom'

function Loginpage() {

    const user = {
        name: "Greeshma R",
        email: 'greeshmar305@gmail.com',
        password: '123456',
        status: 'true',
        username: "greeshmar305"
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [passwordError, setPassworderrror] = useState('')
    const [route, setRoute] = useState('')

    const handleClick = () => {
        console.log(username)
        console.log(password)
        console.log(user.email)

        if ((user.username !== username && user.email !== username) || username === '') {
            setError("! Enter a valid mail id or username")
        }
        else if (user.password !== password) {
            setPassworderrror("*Wrong Password ")
        }
        else {
            setError('')
            setPassworderrror('')
            setRoute("/listensong");


        }
    }

    return (
        <div>
            <Loginheader />
            <section>
                <div className='main-container-login'>
                    <h1> Log in to Spotify</h1>
                    <div className='error'>{error}</div>
                            <div className='error'>{passwordError}</div>
                    <div className='account-login'>
                        <button className='account-login-btn' id='google' >
                            <img src='google.png' /><span> Continue with Google </span>
                        </button>
                        <button className='account-login-btn' id='facebook' >
                            <img src='facebook.png' /><span> Continue with Facebook </span>
                        </button>
                        <button className='account-login-btn' id='apple' >
                            <img src='apple.png' /><span> Continue with Apple</span>
                        </button>
                        <button className='account-login-btn' id='number' >
                            <span> Continue with phone number</span>
                        </button>

                    </div>
                    <hr />
                    <div className='log-in'>
                        <form >
                            <label>Email or username</label>
                            <input type='text' placeholder='Email or username' value={username}
                                onChange={(event) => { setUsername(event.target.value) }}   ></input>
                            <label>Password</label>
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />


                         

                            <div className='switch' >
                                <input type='checkbox' id='switch' />
                                <label for='switch'></label>
                                <span>Remember me</span>
                            </div>
                            <button type='button' onClick={handleClick}>

                                <Link to={route} >Log In</Link></button>

                            <span className='forgot'>Forgot your Password?</span>

                        </form>
                    </div>
                    <hr />


                    <div className='last-qtn'>
                        <div className='qtn'>Don't you have an account?</div>
                        <span>Sign up for Spotify</span>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Loginpage