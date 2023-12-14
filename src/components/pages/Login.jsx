import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  let navigate = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

const SubmitHandler =()=>{
  const localData = localStorage.getItem("data")
 const localStorageData = JSON.parse(localData)
 
  console.log(localStorageData.email)
  console.log("password",localStorageData.password)

  const data={
    email:email,
    password:password
  }

  if (data.email == localStorageData.email && data.password == localStorageData.password){
    // navigate to movies page 
    navigate("/Todo")


    Swal.fire({
      icon: 'success',
      title: 'Logged in successfully!',
      showConfirmButton: false,
      timer: 3000, // 3 seconds
    });
  }else{

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      showConfirmButton: false,
      timer: 3000, // 3 seconds
    });
  }
console.log(data)
}

  return (
    <div>
    <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"></img>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            </div>
  
            
  
            <div class="form-outline mb-4">
            <label className="form-label" htmlFor="loginName">Email</label>
                <input type="email" id="loginName" className="form-control" onChange={(e) => setEmail(e.target.value)} />

            </div>
  
            <div class="form-outline mb-3">
            <label className="form-label" htmlFor="loginPassword">Password</label>
            <input type="password" id="loginPassword" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div>
  
            <div class="d-flex justify-content-between align-items-center">
              <div class="form-check mb-0">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
            </div>
  
            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="button" class="btn btn-primary btn-lg
                padding-left: 2.5rem; padding-right: 2.5rem;"onClick={SubmitHandler}>Login</button>
              <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="Register"
                  class="link-danger">Register</a></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Login;
