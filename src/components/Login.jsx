import { FaMapMarkedAlt } from 'react-icons/fa'
import './login.css'
import { useState, useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';

const Login = ({setShowLogin, myStorage ,setCurrentUser}) => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const nameRef = useRef();
    const passwordRef = useRef();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const user = {
            username: nameRef.current.value,
            password: passwordRef.current.value,
        };        
        try {
            const res = await axios.post("http://localhost:8800/api/users/login", user);
            myStorage.setItem("user", res.data.username);
            setCurrentUser(res.data.username);
            setShowLogin(false)
            setError(false);
        } catch(err) {
            setError(true);
        }
    };
    
    return (
        <div className='loginContainer'>
            <div className="logo">
                <FaMapMarkedAlt />
                LanaPins
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='username' 
                    ref={nameRef}
                    required
                />
                <input 
                    type="password" 
                    placeholder='password' 
                    ref={passwordRef}
                    required
                />
                <button className='loginbtn' type="submit">Login</button>
                {error &&
                    <span className="failure">Something Went Wrong!</span>
                }
            </form>
            <RxCross2 className='loginCancle' onClick={() => setShowLogin(false)} />
        </div>
    )
}

export default Login