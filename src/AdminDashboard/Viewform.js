import React, {useState} from 'react'
import './Allform.css'

function Viewform() {

const[fname, setfname]= useState('');
const[Lname, setLname] = useState('');

const handlefname=(event)=>
{setfname( event.target.value);}
  
  const handlelname=(event)=>
  {setLname( event.target.value);}

    const handlesubmit=(event)=>{
  alert(`${fname} ${Lname}`);
 event.preventDefault(); }//when page refresh details enter are not lost
  
 
 return (
    <div>
        <div className='addform'>
         <form onSubmit={handlesubmit}>
            <h1>Enter Details</h1>
        <input placeholder='FirstName'
        type='text'
        value={fname}
         onChange={handlefname}>

         </input>

        <input placeholder='LastName'
        type='text'
        value={Lname}
         onChange={handlelname}>
         </input>
      </form>
      </div>
    </div>
  )
}

export default Viewform;