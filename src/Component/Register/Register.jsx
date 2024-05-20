import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser} = useContext(AuthContext); 

    const handleRegister = e =>{
        e.preventDefault(); 
        const form = e.target; 
        const email = form.email.value; 
        const password = form.password.value; 
        console.log(email, password);
        
        createUser(email, password)
        .then(result => {
            const newUser = {email,   creationTime : result.user?.metadata?.creationTime }; 
            console.log(result.user)
            fetch(`https://coffee-store-server-uw3h.vercel.app/users`, {
                method : "POST",
                headers : {"content-type" : "application/json"},
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data=> {
                console.log(data); 
                if(data.insertedId){
                    Swal.fire({
                        position: "center",
                        
                        icon: "success",
                        iconColor: 'green',
                        title: "Registration Success",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                
            })
        })
        .catch(err =>{
             console.log(err)
             
                Swal.fire({
                    title: "Registration Failed !",
                    icon: "error",
                    iconColor: 'red',
                    showConfirmButton: false,
                    timer: 1500
                  });
            
            }); 
    }

    return (
        <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered w-80"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;