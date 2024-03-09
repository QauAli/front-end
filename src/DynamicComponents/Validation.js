function Validation(values)
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

    else if(values.password.length<6) {
      errors.password="password is too short";
    }

    if (isValid) {
      // Handle form submission logic here (e.g., API request)
      alert('Account created  successfully now login with your credentials');
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
   
export default Validation;