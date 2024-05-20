import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          Swal.fire({
            position: "center",

            icon: "success",
            iconColor: "green",
            title: "Log-in Success !",
            showConfirmButton: false,
            timer: 1500,
          });
          const userLogin = {
            email,
            lastSignInTime: result.user?.metadata?.lastSignInTime,
          };
          fetch("https://coffee-store-server-uw3h.vercel.app/users", {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userLogin),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        }
      })
      .catch((err) => {
        
        console.log(err)
        Swal.fire({
            title: "Log-in Failed !",
            text: 'Please Try Again...',
            icon: "error",
            iconColor: 'red',
            showConfirmButton: false,
            timer: 1500
          });
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
