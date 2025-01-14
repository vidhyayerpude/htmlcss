import React from 'react'
import '.loginformstyle.css'
import Image from './Image/profile.jpg'

export default function Loginform() {
  return (
    <div className='wrap'>
        <form>
            <div className='imgcointainer'>
                <img src={Image} alt="Avatar" />
            </div>

            <div className='cointainer'>
                <label><b>Username</b></label>
                <input type="text" placeholder='Enter Username' name='name' />

                <label><b>Password</b></label>
                <input type="password" placeholder='Enter password' name='name' />
                
                <button type='submit'>Login</button>
                <input type="checkbox" checked /> Remember me
            </div>

            <div className='container' style={{backgroundColor: "#f1f1f1"}}>
            <button type='button' className='cancel'>cancle</button>
            <span className='psw'><a href='#'>Forgot Password?</a></span>
            </div>
        </form>
      
    </div>
  )
}