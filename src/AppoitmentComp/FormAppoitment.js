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
                <input type="date"  name="appoitmentDate"  value={values.appointmentDate} onChange={handlechange}/>
                </label>
                <label>Appoitment Time
                <input type="time"  name="appoitmentTime"  value={values.appoitmentTime} onChange={handlechange}/>
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

        <button type='submit' >Send Message</button>
                    
        

    </div>
               
            </form>
            </div>
            <img className='rightside' src={right} alt=""/>
        </div>
        
  )
}

export default FormAppoitment;