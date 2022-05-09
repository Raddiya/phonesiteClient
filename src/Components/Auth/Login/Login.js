import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import './Login.css'
import axios from "axios";



const Login = () => {
    const notify = (toastError) => toast(toastError);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);


    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }



        // setEmail;
    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(userInfo)

        signInWithEmail(userInfo.email, userInfo.password);

    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {
            let email = '';
            if (user) {
                email = user.user.email;

            }
            else if (googleUser) {
                email = googleUser.user.email;
            }
            if (email) {
                axios.post('/login', { email })
                    .then(res => {
                        localStorage.setItem('auth_token', res.data.token)
                        navigate(from);
                    })
            }

        }
    }, [user, googleUser]);

    useEffect(() => {
        if (hookError) {
            notify(hookError.message)
        }
    }, [hookError])
    useEffect(() => {
        if (googleError) {
            notify(googleError.message)
        }
    }, [googleError])


    return (
        <div className="login-container container">
            <h1 className="login-title">LOGIN</h1>
            <form onSubmit={handleLogin}>
                <input  type="text" className="input form-control" placeholder="Your Email" onChange={handleEmailChange} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <input className="input form-control" type="password" placeholder="password" onChange={handlePasswordChange} />
                {errors?.password && <p className="error-message">{errors.password}</p>}
                <br></br>
                <button className="button">Login</button>

                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            </form>

            <button className="button" onClick={() => signInWithGoogle()}>Google</button>
        </div>
    );
};

export default Login;