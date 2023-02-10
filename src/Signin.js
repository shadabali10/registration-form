import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./Signin.css"

const Signin = () => {
     const [inputData,setInputData] = useState([])

    const  [ formValues , setFormValues] =useState({
        email:"",
        password:"", 
   })

   const  [ formErrors , setFormErrors] =useState({})
   const [isSubmit,setIsSubmit] = useState(false)

   let {email,password} = formValues;
   const handleChange = (e)=>{
       const {name,value} = e.target;
        //   name=e.target.name;
        //   value=e.target.value;
       setFormValues({...formValues,[name]:value}) 
      
   }




 const handleSubmit = (e) =>{
   e.preventDefault();
 setIsSubmit(true);
 setFormErrors(validate(formValues));
 axios.post('https://fundflow.onrender.com/user/register',formValues).then((res)=>{
  console.log(res);
 })
 
 setInputData([...inputData,{email,password}])
}

useEffect(()=>{
 console.log(formErrors);
 if(Object.keys(formErrors).length === 0 && isSubmit)
 console.log(formValues);
},[formErrors])

const validate = (values) =>{
   const errors = {}

   if(!values.email){
     errors.email="*required";
  }

if(!values.password){
 errors.password="*required";
}

   return errors;
}

 return (
    <>
   <div className='signup-container'>
     <div className='signup-main'>
       <div className='signup-right1'></div>
       <div className='signup-left1'>
         <div className='form'>
     <form>
     <div className='welcome-text'>Welcome!</div>
     <div className='details-fill-text'>Please, Enter your details</div>

      
      
       <div>
          
           <input name='email' placeholder='Email' autoComplete='off' value= 
            {formValues.email} onChange= 
           {handleChange}></input>
           <br></br>
           <span>{formErrors.email}</span>
       </div>
      
      
      
       <div>
          
           <input name='password' placeholder='Password' autoComplete='off' value= 
            {formValues.password} 
            onChange={handleChange}></input>
            <br></br>
             <span>{formErrors.password}</span>
       </div>

     
       <button type='submit' onClick={handleSubmit} className="signup-button">SignIn</button>
      <div className='check-account'>Did't have an account?<a href='#'>SignUp</a></div>

     </form>
     </div>
     </div>
     </div>
   </div>
   {
    inputData.map((data)=>{
        return (
            <>
            <div>{data.email}</div>
            <div>{data.password}</div>
            </>
        )
    })
   }
   </>
 )
}
 
export default Signin
