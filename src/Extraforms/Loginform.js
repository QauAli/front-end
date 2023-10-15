import React,{useState} from 'react'
import {Link}  from "react-router-dom";
import './Loginformstyles.css'
import Validation from '../Components/Validation';
//import Loginform2 from './Loginform2';

function Loginform() {
const[values, setvalues]=useState({
    name:'',
    email:"",
    password:'',
    // confrim_password: ''

})
const [errors, setErrors]=useState({})
// const [isChecked, setIsChecked] = useState(true);
const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state



/*============================values-entered handling=============================================*/ 
function handlechange (e) {
   
     setvalues({...values, [e.target.name]: e.target.value})
    
    
}

/*=============================submitbutton handling==============================================*/ 
function handlesubmit(e) {
  e.preventDefault();

  const validationErrors = Validation(values);

//^The line Object.keys(validationErrors).length === 0 is used to check if there 
//^are no validation errors in the validationErrors object.
//^validationErrors is an object that holds error messages for each input field in your form.
  
if (Object.keys(validationErrors).length === 0) {
    // No validation errors, you can proceed with form submission logic here
    console.log('Sign-up with name:', values.name, 'and password:', values.password);

    // setIsLoggedIn(true); this is handle in the handleregistration function 
    handleRegistration(); // Call the registration function if there are no client-side validation errors
  } else {
    // Validation errors exist, update the errors state
    setErrors(validationErrors);
  }
}

// Function to reset form fields
function handleCancel() {
  setvalues({ name: '', password: '', email:'' });
  setErrors({});
}


 async function handleRegistration() {
  try {
    const response = await fetch('your_registration_api_url_here', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Registration successful:', responseData);
      setIsLoggedIn(true);
    } else {
      const errorData = await response.json();
      console.error('Registration failed:', errorData);
      setErrors(errorData); // Set server validation errors, if any
    }
  } catch (error) {
    console.error('Registration error:', error);
  }
}


/*===================checkbox handling=================================*/ 
const handleCheckboxChange = () => {
    // setIsChecked(!isChecked);
    setIsLoggedIn(!isLoggedIn);
  };
  const uncheckCheckbox = () => {
    // setIsChecked(false);
    setIsLoggedIn(false);
  };


  /*===================logout-button handling=================================*/ 
  function handleLogout() {
    setIsLoggedIn(false); // Set login state to false on logout
    setvalues({ name: '', password: '', email: '' }); // Clear form data
  }


  
  
/*===================main function=================================*/ 
  return (
    
  <div className='wrap' >
  

     {isLoggedIn ? ( // Conditionally render based on login state
        <>
          <h1 className='plog'>Welcome, {values.name}!</h1>
          <button onClick={handleLogout} id='logout'> Logout</button>
        </>
      ) : ( 
        <form className='form1' onSubmit={handlesubmit}>
          <h1 className='sh' ><i class="fa-solid fa-user-plus" ></i>Sign Up</h1>
            <div className='form-container'>

                <label className='Label1'>Username</label>
                <input type="text"  placeholder='Enter UserName' name="name"  value={values.name} onChange={handlechange}/>
                {errors.name && <p>{errors.name}</p>}

                <label className='Label1'>Email</label>
                <input type="text"  placeholder='Enter Email' name="email"  value={values.email} onChange={handlechange}/>
                {errors.email && <p>{errors.email}</p>}


                <label className='Label1'>Password</label>
                <input type="password"  placeholder='Enter Password' name="password" value={values.password} onChange={handlechange}/>
                {errors.password && <p>{errors.password}</p>}


          
              
               <button type="submit">Login
               </button> 
               

          <button type="submit" onClick={handleRegistration}>SignUp</button>
      <div className='container'>
               <input type="checkbox"  onClick={uncheckCheckbox}/>
               <label for= "">Remember me</label> 
                </div>
            </div>


           
                <button type="button" id='canclebtn' onClick={handleCancel}>Cancle</button>
                
                <span className='psw'>Forgot<Link to="/Forgotpassword">Password?</Link></span>
            
            
        </form>
        
        


)}
    
{/* ============================================2nd form==================== */}
    
      
    </div>

     
    
    
    
   
  );
 }


export default Loginform;