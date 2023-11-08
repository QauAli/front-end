// this is dynamic and used to insert images
import React from 'react'
import './Herostyles.css'

function Hero(props) {
  return (
    <>
    {/* hero component is dynamic according to the web pages switched it change */}
{/* we can control this from different web pages */}
    <div className={props.cName}>
        <img alt='heroImg'  src={props.heroImg}/>
<div className='hero_text'>
<h1>{props.title}</h1>
    <p>{props.text}</p>
<a href={props.url} className={props.btnClass} id="btn2">{props.buttontext}
        </a>

        </div>
        {/* closing of the hero_text div tag */}
    
    </div>
    {/* closing of the hero div tag */}
    </>
  );
}

export default Hero;