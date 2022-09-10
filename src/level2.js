import React from "react";
import './level2.css';
import back from './back.png'

const level2 = () => {
   return(
    <div className="new">
         <img className='myimg4' src={back}/>
         <div className="mytxt1">
            <h1>Vacancies</h1>
            <input className="search" type="search" 
            placeholder="what are you looking for..."
            ></input>
            <button className="button">Search</button>
         </div>
         <div className="mydi1">
             <h2 className="mytxt2">ReactJS Tutors</h2>
             <input className="clnd1" type="date"></input>
             <div className="bt1">
               <h3>more detailes</h3>
             </div>
         </div>
         <div className="mydi2">
             <h2 className="mytxt3">English trainer</h2>
             <input className="clnd2" type="date"></input>
             <div className="bt2">
               <h3>more detailes</h3>
             </div>
         </div>
         <div className="mydi3">
             <h2 className="mytxt4">ReactJS | Intern</h2>
             <input className="clnd3" type="date"></input>
             <div className="bt3">
               <h3>more detailes</h3>
             </div>
         </div>
         <div className="mydi4">
             <h2 className="mytxt5">Quality Assurance (QA) | Junior</h2>
             <input className="clnd4" type="date"></input>
             <div className="bt4">
               <h3>more detailes</h3>
             </div>
         </div>
         <div className="mydi5">
             <h2 className="mytxt6">SMM Specialist | Junior</h2>
             <input className="clnd5" type="date"></input>
             <div className="bt5">
               <h3>more detailes</h3>
             </div>
         </div>
         <div className="mydi6">
             <h2 className="mytxt7">NODE JS | Middle</h2>
             <input className="clnd6" type="date"></input>
             <div className="bt6">
               <h3>more detailes</h3>
             </div>
         </div>
         <div className="next">
            <h1>next</h1>
         </div>
    </div>
   )

}
export default level2