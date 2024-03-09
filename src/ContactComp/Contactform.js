import React, {useState} from 'react'
 import './Contact.css'

function Form() {

const[fname, setfname]= useState('');
   const[Lname, setLname] = useState('');
    const[Email, setEmail] = useState('');
const[Msg, setMsg] = useState('');
const [submitted, setSubmitted] = useState(false); // track the state to empty th eform when form is submitted 

const handlefname=(event)=>
{setfname( event.target.value);}
  
  const handlelname=(event)=>
  {setLname( event.target.value);}

const handleEmail=(event)=>
{setEmail(event.target.value);}

    const handleMsg=(event)=>
    {setMsg(event.target.value);}


    async function handlesubmit(e) {
 e.preventDefault();  //when page refresh details enter are not lost
 if (!fname || !Lname || !Email || !Msg) {
  alert('Please fill in all fields before submitting.');
  return;
}
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailFormat.test(Email)) {
    alert('Invalid email format. Please enter a valid email address.');
    return;
  }
 await handlecontactform();
 setSubmitted(true);
 alert('Your form is submitted!');
    // Reset the form after successful submission
    setfname('');
    setLname('');
    setEmail('');
    setMsg('');
}
async function handlecontactform() {
 const requestData = {
  FirstName: fname,
  LastName: Lname,
  Email_id: Email,
  Message: Msg,
};

const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(requestData),
};

const response = await fetch("http://127.0.0.1:5000/contact_us", requestOptions);
const data = await response.json();
  if (!response.ok) {
    // Handle error
    console.error('Error submitting form:', response.statusText);
    return;
  }
const responseData = await response.json();
const event = new CustomEvent("newMessage", { detail: data });
            window.dispatchEvent(event);
};
  
 
return (
  <div>
    <div className='form-container'>
      
        <form onSubmit={handlesubmit}>
  
          <>
            <input
              placeholder='FirstName'
              type='text'
              value={fname}
              onChange={handlefname}
            />

            <input
              placeholder='LastName'
              type='text'
              value={Lname}
              onChange={handlelname}
            />

            <input
              placeholder='Email'
              type='text'
              value={Email}
              onChange={handleEmail}
            />

            <textarea
              placeholder='Message'
              rows="8"
              value={Msg}
              onChange={handleMsg}
            ></textarea>

            <button type='submit'>Send Message</button>
          </>
        </form>
    </div>
  </div>
);
}

export default Form;