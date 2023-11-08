import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,Tooltip,Legend } from 'chart.js'

    import {Pie} from 'react-chartjs-2';

    ChartJS.register(
        ArcElement,Tooltip,Legend);

function Piechart() {

    const data={
        labels:['One', 'Two', 'Three'],
        datasets:[
            {
                data: [3,6,9],
                backgroundColor: ['#8b0000','black', '#4a4a40']
            }
        ]
    };
    const options={

    };
  return (
    <div
    style={{
        padding: '20px',
        width: '50%',
        marginLeft: "62rem" ,
        height: '30rem',
        marginTop: '-30rem'
    }}>

<Pie 
data ={data} 
options= {options}>

</Pie>
    </div>
  )
}

export default Piechart;