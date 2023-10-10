import React from 'react';
import HeadTitle from '../../common/HeadTitle/HeadTitle';

const Register=()=>{
    return(
        <>
        <HeadTitle/>
        <section className='contact mtop'>
                <div className='container flex'>
                    <div className='main-content'>

                        <p>Fill out the form below</p>

                        <form>
                        <div className='grid1'>
                        <div className='input'>
                                <span>
                                    First name <label>*</label>
                                </span>
                                <input type='text' name='fname'/>

                            </div>
                            <div className='input'>
                                <span>
                                    Last name <label>*</label>
                                </span>
                                <input type='text' name='lname'/>

                            </div>
                            <div className='input'>
                                <span>
                                    Phone <label>*</label>
                                </span>
                                <input type='text' name='phone'/>

                            </div>
                            <div className='input'>
                                <span>
                                    Email <label>*</label>
                                </span>
                                <input type='email' name='email'/>

                            </div>
                            
                            
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
        
        </>
    )
}
export default Register;