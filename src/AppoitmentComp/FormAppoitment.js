import React, {useState} from 'react'
import './AppoitmentStyles.css'
import Validation from '../DynamicComponents/Validation';

function FormAppoitment({ }) {
  
    const initialFormState={
        name: '',
        email: '',
        appointmentDate: '',
        appointmentTime: '',
        carModelMake: '',
        contactInfo: '',
        city: '',
        description: '',
      };
      const [values, setvalues] = useState(initialFormState);
      const [errors, setErrors]=useState({})
      const [isSubmitted, setIsSubmitted] = useState(false);
      
      async function handleMessage() {
        try {
          const messageObj = {
            Name: values.name,
            C_Email_Id: values.email,
            Appointment_Date: values.appointmentDate,
            Appointment_Time: values.appointmentTime,
            Car_Model_Make: values.carModelMake,
            ContactNo: values.contactInfo,
            City: values.city,
            Description: values.description,
          };
      
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messageObj),
          };
      
          console.log(messageObj);
      
          const response = await fetch('http://127.0.0.1:5000/appointment', requestOptions);
          const data = await response.json();
      
          if (!response.ok) {
            console.log("Appointment Not Registered");
          } else {
            console.log("Appointment Registered Successfully");
            console.log(JSON.stringify(data));
            // Dispatch a custom event when the appointment is registered
            const event = new CustomEvent("newAppointment", { detail: data });
            window.dispatchEvent(event);
          }
        } catch (error) {
          console.error("Error during appointment registration:", error);
  
        }
        setIsSubmitted(true);
        setvalues(initialFormState);
  }

      /*============================values-entered handling=============================================*/ 
function handlechange (e) {
   
    setvalues({...values, [e.target.name]: e.target.value})}


    /*=============================submitbutton handling==============================================*/ 
    function handlesubmit(e) {
      e.preventDefault();
    
      // Show confirmation box
      const isConfirmed = window.confirm("Are you sure you want to book the appointment?");
    
      if (isConfirmed) {
        alert("Thank you for booking appointment");
    
        const validationErrors = Validation(values);
    
        if (Object.keys(validationErrors).length === 0) {
          // No validation errors, you can proceed with form submission logic here
          console.log('Book appointment:', values.name, 'and email:', values.email);
    
          // Call handleMessage function or other logic to execute after confirmation
          handleMessage();
          
        } else {
          // Validation errors exist, update the errors state
          setErrors(validationErrors);
        }
      } else {
        // User canceled the confirmation
        alert("Not interested in booking appointment");
        console.log("Appointment booking canceled");
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

                
                


                <label>Appointment Date
                <input type="date"  name="appointmentDate"  value={values.appointmentDate} onChange={handlechange}/>
                </label>
                <label>Appointment Time
                <input type="time"  name="appointmentTime"  value={values.appointmentTime} onChange={handlechange}/>
                </label>
    


                <label className='form2_label'>Car Model\Make
                <input type="text"  name="carModelMake"  value={values.carModelMake} onChange={handlechange}/>
                </label>

                <label className='contact'>Contact Info
                <input type="text"  name="contactInfo"  value={values.contactInfo} onChange={handlechange}/>
                </label>

                <label className='city'>City
                <input type="text"  name="city"  value={values.city} onChange={handlechange}/>
</label>

            <label className='description'>Description</label>
  
            <textarea rows="6"
            name="description"
        value={values.description}
        onChange={handlechange}>
        </textarea>

        <button type='submit'onClick={handleMessage}>Book Appointment</button>
                    
        

    </div>
               
            </form>
            </div>
          
        </div>
        
  )
  }

export default FormAppoitment