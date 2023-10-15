import React, {useState} from 'react'
 import './Contact.css'

function Form() {

const[fname, setfname]= useState('');
   const[Lname, setLname] = useState('');
    const[Email, setEmail] = useState('');
const[Msg, setMsg] = useState('');

const handlefname=(event)=>
{setfname( event.target.value);}
  
  const handlelname=(event)=>
  {setLname( event.target.value);}

const handleEmail=(event)=>
{setEmail(event.target.value);}

    const handleMsg=(event)=>
    {setMsg(event.target.value);}


    const handlesubmit=(event)=>{
  alert(`${fname} ${Lname} ${Email}`);
 event.preventDefault(); }//when page refresh details enter are not lost
  
 
 return (
    <div>
        <div className='form-container'>
         <form onSubmit={handlesubmit}>
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

        <input placeholder='Email'
type='text'
        value={Email}
         onChange={handleEmail}>
         </input>


        <textarea placeholder='Message' rows="6"
        value={Msg}
        onChange={handleMsg}>
        </textarea>

<button type='submit'>Send Message</button>
      
      </form>
      </div>
    </div>
  )
}

export default Form;