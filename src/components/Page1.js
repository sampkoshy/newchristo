import React from 'react';
import   img from"../assests/images/ig.jpg";
import img2 from "../assests/images/1.png"
import "./page1.css"

export const Page1 = () => {
  return (
    <div>
      <img src={img} alt="Description of the image" className='img1' />
      <div className='section1'> 
        <img src={img2} className='section1-img2'></img>
        <h3 className='section-unit'>unit & details</h3>
        <img src={img2}></img>
        
         </div>
    </div>
  ); 
};

