function AppointmentsFormValidations(values) 
  {
    let errors={}
    let isValid = true;


    // ==============================Name-field check==================================
    if (!values.name || values.name.trim() === '') {
      errors.name='Name is required';
      isValid = false;}


      //======================passord field check=========================================
      if (!values.password || values.password.trim() === '') { //trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
      errors.password='Password is required';
      isValid = false;
    }
    
    // else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(values.password)){
    //   errors.password="invalid password"
    // }

    else if(values.password.length<6) {
      errors.password="password is too short";
    }

    if (isValid) {
      // Handle form submission logic here (e.g., API request)
      alert('Sig-up successfully');
    }


    // Additional checks for registration
  if (!values.confirmPassword || values.confirmPassword.trim() === '') {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  

    // Email field check
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Invalid email format';
  }
    
    return errors;
  };

export default AppointmentsFormValidations;
