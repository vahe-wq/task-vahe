import React from 'react';
import './navbar.css';
import logo from './logo.jpg.png'
import main from './main.png'
import body from './body.png'


const Navbar = () => {
    return(
      <div className='nav'>
         <img className='myimg' src={logo}/>
         <img className='myimg2' src={main}/>
         <img className='myimg3' src={body}/>
        
         
         
        <div className='mydiv1'>
            <h1>Services</h1>
            <div className='subdiv1'>
                <h2 className='mytext1'>UI/UX Design</h2>
                <h2 className='mytext2'>Web development</h2>
                <h2 className='mytext3'>Digital marketing</h2>
                
            </div>
        </div>
        <div className='mydiv2'>
            <h1>Career</h1>
        </div>
        <div className='mydiv3'>
            <h1>Blog</h1>
        </div>
        <div className='mydiv4'>
            <h1>Academy</h1>
        </div>
        <div className='mydiv5'>
            <h1>Contact</h1>
        </div>

        <div className='then'>

        </div>
        
        
      </div>
      
      
    )
    

  }
  
  export default Navbar