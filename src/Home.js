import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./Home.css"

const Home = () => {

  const [inputArray,setInputArray] = useState([])

    const  [ formValues , setFormValues] =useState({
         name:"",
         email:"",
         age:"",
         password:"",
         Role:"",
    })

    const  [ formErrors , setFormErrors] =useState({})
    const [isSubmit,setIsSubmit] = useState(false)

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormValues({...formValues,[name]:value})
       
    }

  localStorage.setItem("name",formValues.name);
  localStorage.setItem("email",formValues.email);
  localStorage.setItem("age",formValues.age);
  localStorage.setItem("password",formValues.password);


  const handleSubmit = (e) =>{
    e.preventDefault();
  setIsSubmit(true);
  setFormErrors(validate(formValues));
  axios.post('https://fundflow.onrender.com/user/register',formValues).then((res)=>{
   console.log(res);
  })

  let {name, email,age,password,Role}=formValues;

  setInputArray([...inputArray,{name, email,age,password,Role}])

  formValues={
    name:"",
    email:"",
    age:"",
    password:"",
    Role:"",
  }

}

useEffect(()=>{
  console.log(formErrors);
  if(Object.keys(formErrors).length === 0 && isSubmit)
  console.log(formValues);
},[formErrors])

const validate = (values) =>{
    const errors = {}
    if(!values.name){
       errors.name="*required";
    }
    if(!values.email){
      errors.email="*required";
   }
   if(!values.age){
    errors.age="*required";
 }
 if(!values.password){
  errors.password="*required";
}

    return errors;
}

  return (
    <div className='signup-container'>
      <div className='signup-main'>
        <div className='signup-left'></div>
        <div className='signup-right'>
          <div className='form'>
      <form>
      <div className='welcome-text'>Welcome!</div>
      <div className='details-fill-text'>Please, Enter your details</div>

        <div>
          
            <input name='name' autoComplete='off' placeholder='Name' value= 
             {formValues.name} 
             onChange={handleChange}></input>
             <br></br>
             <span>{formErrors.name}</span>
        </div>
       
        <div>
           
            <input name='email' placeholder='Email' autoComplete='off' value= 
             {formValues.email} onChange= 
            {handleChange}></input>
            <br></br>
            <span>{formErrors.email}</span>
        </div>
       
        <div>
          
            <input name='age' placeholder='Age' autoComplete='off' value= 
             {formValues.age} 
             onChange={handleChange}></input>
             <br></br>
             <span>{formErrors.age}</span>
            
        </div>
       
        <div>
           
            <input name='password' placeholder='Password' autoComplete='off' value= 
             {formValues.password} 
             onChange={handleChange}></input>
             <br></br>
              <span>{formErrors.password}</span>
        </div>

        <div>
           
            <input name='Role' placeholder='Role' autoComplete='off' value= 
             {formValues.Role} 
             onChange={handleChange}></input>
             <br></br>
              <span>{formErrors.Role}</span>
        </div>
       
        <button type='submit' onClick={handleSubmit} className="signup-button">SignUp</button>
       <div className='check-account'>Already,have an account?<a href='#'>Login</a></div>

      </form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
