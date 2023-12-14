import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';

import { auth } from "../../firebase";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");





  

    const SubmitHandler = () => {
      if (!email || !password) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Fill in all fields!',
          showConfirmButton: false,
          timer: 3000,
        });
        return;
      }





    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });

        Swal.fire({
          icon: 'success',
          title: 'Registration successful!',
          showConfirmButton: false,
          timer: 3000,
        });

        // Redirect to the desired page upon successful registration
        navigate("/Login");
      })
      .catch((error) => {
        // Handle registration error
      });
  };

  return (
    <div>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"></img>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mb-4">
              <form>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3">User Registration</p>
                </div>



                <div class="form-outline mb-4">
                  <input type="Name" id="Name" className="form-control" onChange={(e) => setName(e.target.value)} />
                  <label className="form-label" htmlFor="Name">Name</label>

                </div>

                <div class="form-outline mb-3">
                  <input type="Email" id="Email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                  <label className="form-label" htmlFor="Password">Email</label>
                </div>
                <div class="form-outline mb-3">
                  <input type="Phone" id="Phone" className="form-control" onChange={(e) => setPhone(e.target.value)} />
                  <label className="form-label" htmlFor="Phone">Phone</label>
                </div>
                <div class="form-outline mb-3">
                  <input type="password" id="Password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                  <label className="form-label" htmlFor="Password">Password</label>
                </div>

                <div class="form-outline mb-3">
                  <input type="repeatPassword" id="repeatPassword" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                  <label className="form-label" htmlFor="Password">repeatPassword</label>
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
                padding-left: 2.5rem; padding-right: 2.5rem;"onClick={SubmitHandler}>Register</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Already account Then login? <a href="Login"
                    class="link-danger">Login</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
