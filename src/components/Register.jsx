
import { FaMapMarked, FaMapMarkedAlt } from 'react-icons/fa'
import './register.css'
import { useState, useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';


const Register = ({setShowRegister}) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const newUser ={
            username : nameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value,
        };
        try{
           await axios.post("http://localhost:8800/api/users/register", newUser);
           setError(false);
           setSuccess(true);
        }catch(err){
            setError(true);
            console.log(err);
        }
    };
    return (
        <div className='registerContainer'>
            <div className="logo">
                <FaMapMarkedAlt />
                LanaPins
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder='username' ref={nameRef} />
                <input type="email" placeholder='email' ref={emailRef}/>
                <input type="password" name="" id="" placeholder='password' ref={passwordRef}/>
                <button className='registerbtn'>Register</button>
                {success &&
                    <span className="success">Successfully.You can login now!</span>
                }{error &&
                    <span className="failure">Something Went Wrong!</span>
                }
            </form>
            <RxCross2 className='registerCancle' onClick={()=>{setShowRegister(false)}}/>
        </div>
    )
}

export default Register