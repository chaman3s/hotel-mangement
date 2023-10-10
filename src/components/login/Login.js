import React from 'react';
import { Link } from 'react-router-dom';
import HeadTitle from '../../common/HeadTitle/HeadTitle';
import './style.css';
const Login=()=>{
   
    // const [email,setEmail]=useState('')
    // const [password,setPasssword]=useState('')
    

    // const [allValue,setAllValue]=useState([])

    // const formSubmit=(e)=>{
    //     e.preventDefault()
    //     const newValue={email,password}
    //     setAllValue([...allValue,newValue])

    //     setEmail("")
    // }
    //form onSubmit={formSubmit}

    // value={email} onChange={(e)=>setEmail(e.target.value)}
    // value={password} onChange={(e)=>setPasssword(e.target.value)}

    return(
        <>
        <HeadTitle/>
        <section className='forms top'>
            <div className='container'>
                <div className='sign-box'>
                    <p>Enter your e-mail id and password</p>
                    <form >
                    <div className='input'>

                                <input type='email' name='email' placeholder='email' />
                                <input type='password' name='password' placeholder='password'/>
                            <div className='flex_space'>
                               <input type='checkbox'/>
                               <label>Remember Me</label>
                            </div>

                            <div className='flex'>
                                <span>Forgot Password</span>
                            </div>

                            <button type='submit' className='primary-btn'>Sign In</button>
                            <p>Don't have an account <Link to='/register'></Link></p>
                         </div>
                         </form>        
                </div>
            </div>
        </section>
        
        </>
    )
}
export default Login;