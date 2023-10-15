import React,{useState} from 'react'
import DataTable from 'react-data-table-component'
function Columns() {
    const columns = [
        {
     name:'Name',
    selector: row=> row.name
},
{
    name:'Email',
   selector: row=> row.email
},
{
    name:'Age',
   selector: row=> row.age
}
    ];
    const data =[
        {
            id: 1,
            name: 'rimsha',
            email: 'rimshasaqlian08@gmail.com',
            age: '22'
        },
        {
            id: 2,
            name: 'nimra',
            email: 'nimraikram08@gmail.com',
            age: '22'
        },
        {
            id: 3,
            name: 'sonia',
            email: 'sonia.saqlian08@gmail.com',
            age: '20'
        }
    ]
  return (
    <div className='Column-Container'>
       <DataTable
       columns={columns}
       data={data}>

       </DataTable>
    </div>
  )
}

export default Columns