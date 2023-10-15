import React,{useRef,useState} from 'react'
import './Logform.css'
import {Link}  from "react-router-dom";
import Validation from '../DynamicComponents/Validation';
import '../Extraforms/Loginformstyles.css'
// import Loginform from '../routes/Loginform';
// import SignIn from './SignIn';
function Logform() {

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

//^ -------------------------handles sliding of form-----------------
    const htmlbodyRef = useRef(null);
// =======only add=======
    const handleSignUpClick = () => {
        if (htmlbodyRef.current) {
          htmlbodyRef.current.classList.add('Slide')

        }
        // Add your SignUp logic here
      };
    
      const handleSignInClick = () => {
        if (htmlbodyRef.current) {
          htmlbodyRef.current.classList.remove('Slide');
        }
        };



  return (
    <div className='htmlbody' ref={htmlbodyRef}>
        <div className='container-form'>

{           /* ================page swapping buttons============ */}
        <div className='box signin'>
        <h2>Already have an account?</h2>
        <button className='signinBtn' onClick={handleSignInClick}>Sign in</button>
        </div>


        <div className='box signup'>
        <h2>Don't have an account?</h2>
        <button className='signupBtn' onClick={handleSignUpClick}>Sign up</button>
        </div>

{                    /* =============forms creation====================== */}
        <div className='formBx'>

            {/* <SignIn/> */}
            <form className='form signinform' onSubmit={handlesubmit}>
          <h1 ><i class="fa-solid fa-user-plus" ></i>Sign in</h1>
            <div >

                <label >Username</label>
                <input  className="input"
                type="text" 
                 placeholder='Enter UserName' 
                 name="name"  
                 value={values.name} 
                 onChange={handlechange}/>
                {errors.name && <p>{errors.name}</p>}



                <label>Password</label>
                <input className="input"
                type="password" 
                 placeholder='Enter Password'
                  name="password" 
                  value={values.password} 
                  onChange={handlechange}/>
                {errors.password && <p>{errors.password}</p>}
 <button type="submit">Login </button> 
               </div>
<button type="button" id='canclebtn' onClick={handleCancel}>Cancle</button>
<span className='forgot'>Forgot<Link to="/Forgotpassword">Password?</Link></span>
            </form>



{/* ========================2ndform==================== */}
<form className='form signupform' onSubmit={handlesubmit}>
          <h1 className='' ><i class="fa-solid fa-user-plus" ></i>Sign Up</h1>
            <div className=''>

                <label className=''>Username</label>
                <input className="input"
                type="text" 
                 placeholder='Enter UserName' 
                 name="name"  
                 value={values.name} 
                 onChange={handlechange}/>
                {errors.name && <p>{errors.name}</p>}

                <label>Email</label>
                <input  className="input"
                type="text"  
                placeholder='Enter Email' 
                name="email" 
                 value={values.email} 
                 onChange={handlechange}/>
                {errors.email && <p>{errors.email}</p>}


                <label>Password</label>
                <input className='input' type="password" 
                 placeholder='Enter Password'
                  name="password" 
                  value={values.password} 
                  onChange={handlechange}/>
                {errors.password && <p>{errors.password}</p>}

 <button type="submit">Register</button> 
               </div>


                   <div className='checkbox'>
                   <input type="checkbox"  onClick={uncheckCheckbox}/>
                   <label for= "">Remember me</label> 
                     </div>


<button type="button" id='canclebtn' onClick={handleCancel}>Cancle</button>
</form>
{/* ===========closing of the formBx================ */}
        </div>
        {/* =================closing of the container-form======== */}
        </div>

        {/* =====closing of the htmlBody======== */}
    </div>
  )
}

export default Logform;

