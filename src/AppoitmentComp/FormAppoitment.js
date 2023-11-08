import React, {useState} from 'react'
import './AppoitmentStyles.css'
import Validation from '../DynamicComponents/Validation';
import bghome from '../images/bghome.jpg'
import right from "../images/right.png"

function FormAppoitment() {
    const [values, setvalues] = useState({
        name: '',
        email: '',
        appointmentDate: '',
        appointmentTime: '',
        carModelMake: '',
        contactInfo: '',
        city: '',
        description: '',
      });
      //const [submittedData, setSubmittedData] = useState(null);
      const [errors, setErrors]=useState({})


      async function handleMessage() {
  
        const messageObj = {
          Name: values.name,
          C_Email_Id: values.email,
          Appointment_Date: values.appointmentDate,
          Appointment_Time: values.appointmentTime,
          Car_Model_Make: values.carModelMake,
          ContactNo: values.contactInfo,
          City: values.city,
          Description: values.description

        };
      
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(messageObj)
      };
      
      console.log(messageObj)
      
      const response = await fetch('http://127.0.0.1:5000/appointment',requestOptions);
      const data = await response.json();
      
      if (!response.ok) {
        console.log("Appointment Not Registered");
      }else{
        console.log("Appointment Registered Successfully");
        console.log(JSON.stringify(data));
      }
      
      }

      /*============================values-entered handling=============================================*/ 
function handlechange (e) {
   
    setvalues({...values, [e.target.name]: e.target.value})}


    /*=============================submitbutton handling==============================================*/ 
function handlesubmit(e) {
    e.preventDefault();
  
    const validationErrors = Validation(values);

    if (Object.keys(validationErrors).length === 0) {
        // No validation errors, you can proceed with form submission logic here
        console.log('Book appointment:', values.name, 'and email:', values.email);
      } else {
        // Validation errors exist, update the errors state
        setErrors(validationErrors);
      }
    }
  


  return (
    
    <div className='mainbody'>
      
    <div id='body'>

   
            <form  className="form2" onSubmit={handlesubmit}>
        
    <div className='content'>


    <label>Name
                <input type="text" name="name"  value={values.name} onChange={handlechange}/>
                </label>{errors.name && <p>{errors.name}</p>}    

                <label>Email
                <input type="text"  name="email"  value={values.email} onChange={handlechange}/>
                </label>{errors.email && <p>{errors.email}</p>}

                
                


                <label>Appoitment Date
                <input type="date"  name="appointmentDate"  value={values.appointmentDate} onChange={handlechange}/>
                </label>
                <label>Appoitment Time
                <input type="time"  name="appointmentTime"  value={values.appointmentTime} onChange={handlechange}/>
                </label>
    


                <label>Car Model\Make
                <input type="text"  name="carModelMake"  value={values.carModelMake} onChange={handlechange}/>
                </label>

                <label className='contact'>Contact Info
                <input type="text"  name="contactInfo"  value={values.contactInfo} onChange={handlechange}/>
                </label>

                <label className='city'>City
                <input type="text"  name="city"  value={values.city} onChange={handlechange}/>
</label>

            <label>Description</label>
            <textarea rows="6"
            name="description"
        value={values.description}
        onChange={handlechange}>
        </textarea>

        <button type='submit'onClick={handleMessage}> Send Message</button>
                    
        

    </div>
               
            </form>
            </div>
            <img className='rightside' src={right} alt=""/>
        </div>
        
  )
}

export default FormAppoitment;