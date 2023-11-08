import React from 'react'
import 
{BsPeopleFill}
 from 'react-icons/bs'
 import './Dashboard.css'
 import Numbercounter from 'number-counter'
function Home() {
    return(

    <main className='main-container'>
    <div className='main-title'>
        
        <h3 id='dashboard'>DASHBOARD</h3>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>SERVICES</h3>
                <i class="fa-solid fa-gears"></i>
            </div>
            <h1>
            <Numbercounter end={50} start={5} delay='4' preFix="+" />
            </h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>BILLS</h3>
                <i class="fa-regular fa-paste"></i>
            </div>
            <h1>
            <Numbercounter end={200} start={100} delay='4' preFix="+" /></h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className='card_icon'/>
            </div>
            <h1><Numbercounter end={200} start={100} delay='4' preFix="+" /></h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>EMPLOYEES</h3>
                <BsPeopleFill className='card_icon'/>
            </div>
            <h1><Numbercounter end={50} start={5} delay='4' preFix="+" /></h1>
        </div>
    </div>

    
    </main>
)
}
export default Home