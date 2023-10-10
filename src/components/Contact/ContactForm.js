import React, { useState } from 'react';
import './Contact.css';
const ContactForm=()=>{
    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [message,setMessage]=useState('')
    

    const [allValue,setAllValue]=useState([])

    const formSubmit=(e)=>{
        e.preventDefault()
        const newValue={fname,lname,phone,email,subject,message}
        setAllValue([...allValue,newValue])

        setFname("")
        setLname("")
        setPhone("")
        setEmail("")
        setSubject("")
        setMessage("")
    }
    return(
        <>
            <section className='contact mtop'>
                <div className='container flex'>
                    <div className='main-content'>
                        <h1>Contact Form</h1>
                        <p>Fill out the form below</p>

                        <form onSubmit={formSubmit}>
                        <div className='grid1'>
                        <div className='input'>
                                <span>
                                    First name <label>*</label>
                                </span>
                                <input type='text' name='fname' value={fname} onChange={(e)=>setFname(e.target.value)}/>

                            </div>
                            <div className='input'>
                                <span>
                                    Last name <label>*</label>
                                </span>
                                <input type='text' name='lname' value={lname} onChange={(e)=>setLname(e.target.value)}/>

                            </div>
                            <div className='input'>
                                <span>
                                    Phone <label>*</label>
                                </span>
                                <input type='text' name='phonr' value={phone} onChange={(e)=>setPhone(e.target.value)}/>

                            </div>
                            <div className='input'>
                                <span>
                                    Email <label>*</label>
                                </span>
                                <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                            </div>
                            <div className='input'>
                                <span>
                                    Subject <label>*</label>
                                </span>
                                <input type='text' name='subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>

                            </div>
                            
                            </div>
                            <div className='input inputlast'>
                                <span>
                                    Message <label>*</label>
                                </span>
                                <textarea name='message' cols="30" rows="10"  value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                                {/* <input type='text' name='message' value={message} onChange={(e)=>setMessage(e.target.value)}/> */}

                            </div>
                            <button className='primary-btn'>Submit</button>
                        </form>
                    </div>
                    <div className='side-content'>
                        <h3>visit our location</h3>
                        <p> some text</p>
                        <br/>
                        <h3>Message us</h3>
                        <span>info@example.com</span>
                        <br/>
                        <span>0+136861</span>
                        <br/>
                        <div className='icon'>
                            <h1>Follow us</h1>
                            <div className='flex_space'>
                                <i className='fab fa-facebook'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-linkedin'></i>
                                <i className='fab fa-instagram'></i>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className='show-data'>
            {allValue.map((currentValue)=>{
                const {fname,lname,phone,email,subject,message}=currentValue;
                return(
                    <div className='sing-box'>
                    <h1>Send Sucessfully</h1>
                    <h3>First Name: <p>{fname}</p></h3>
                    <h3>Last Name: <p>{lname}</p></h3>
                    <h3>Phone: <p>{phone}</p></h3>
                    <h3>Email: <p>{email}</p></h3>
                    <h3>Subject: <p>{subject}</p></h3>
                    <h3>Message: <p>{message}</p></h3>
                </div>

                )
            })}
               
            </section>
        </>
    )
}
export default ContactForm; 