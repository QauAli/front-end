import React, {useState} from 'react'
import './Allform.css'

function Addform() {

const[fname, setfname]= useState('');
   const[Lname, setLname] = useState('');
    const[Phoneno, setPhoneno] = useState('');
const[Address, setAddress] = useState('');

const handlefname=(event)=>
{setfname( event.target.value);}
  
  const handlelname=(event)=>
  {setLname( event.target.value);}

const handlePhoneno=(event)=>
{setPhoneno(event.target.value);}

    const handleAddress=(event)=>
    {setAddress(event.target.value);}


    const handlesubmit=(event)=>{
  alert(`${fname} ${Lname} ${Phoneno}`);
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

        <input placeholder='Phoneno'
        type='text'
        value={Phoneno}
         onChange={handlePhoneno}>
         </input>


        <textarea placeholder='Address' rows="6"
        value={Address}
        onChange={handleAddress}>
        </textarea>
      
      </form>
      </div>
    </div>
  )
}

export default Addform;