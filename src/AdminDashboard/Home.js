import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
//  import 
//  { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
//  from 'recharts';
 import LineChart from './LineChart';
function Home() {
    return(

    <main className='main-container'>
     {/* <LineChart/> */}
    <div className='main-title'>
        <h3>DASHBOARD</h3>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>SERVICES</h3>
                <i class="fa-solid fa-gears"></i>
            </div>
            <h1>+50</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>BILLS</h3>
                <i class="fa-regular fa-paste"></i>
            </div>
            <h1>+200</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className='card_icon'/>
            </div>
            <h1>+200</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>EMPLOYEES</h3>
                <BsPeopleFill className='card_icon'/>
            </div>
            <h1>+50</h1>
        </div>
    </div>

    
    </main>
)
}
export default Home