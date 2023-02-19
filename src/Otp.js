import React,{useState} from 'react'
import axios from 'axios'
import "./Otp.css"
// import { sendemail } from './Home'

const Otp = (props) => {

  const HandleVerifyOtp = () =>{
    let otp= "";
for (let x of user_otp){
  otp +=x;
}

// console.log(props.email);
    const data = { user_otp:Number(otp),
    email:props.email }
    // email: "kharepushkar2804@gmail.com"}
      console.log("jfthf",data);
    axios.post('https://testrepo-7c0y.onrender.com/user/verifyotp',data).then((res)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error);
    })
  }

    const [user_otp,setOtp] = useState(new Array(4).fill(''))

    const handleChange = (element,index) =>{
           setOtp([...user_otp.map((d,idx)=>(idx===index)?element.value:d)])

           if(element.nextSibling){
            element.nextSibling.focus();
           }
    }

  return (
    <>
      <h3>Enter OTP</h3><br></br>
      <p>We have enter a otp on your email </p>
      <div className='otp-main'>
        {
          user_otp.map((data,index)=>{

            return <input type="number" className='otpBox' maxLength="1" key={index} value={data} onChange={e=>handleChange(e.target,index)} onFocus={e=>e.target.select()} ></input>
          })
        }

        <button onClick={HandleVerifyOtp}>verify otp</button>
      </div>
    </>
  )
}

export default Otp
