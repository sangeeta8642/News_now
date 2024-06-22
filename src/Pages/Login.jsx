
// Login page

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Login = () => {
  const [username, setUsername] = useState("admin@123");
  const [password, setPassword] = useState("admin@123");
  const nav = useNavigate();

  const Login = () => {
    if (username=== "admin@123" && password === "admin@123") {
      const user = { username, password,myfavorites:[] };

      Swal.fire({
        title: 'Login Successful!',
        icon: 'success',
        timer: 1500,
        toast: true,
        timerProgressBar: true,
        position: 'top',
        showConfirmButton: false
      });

      localStorage.setItem("user",JSON.stringify(user))
      nav("/");
    }
    else if (username === '' || password === '') {
      Swal.fire({
        title: 'Please enter valid credentials',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: 'top',
        showConfirmButton: false
      });
    } else {
      Swal.fire({
        title: 'User not found',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: 'top',
        showConfirmButton: false
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border p-12  rounded-lg">
        <div>
          <button onClick={() => nav("/")}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <h2 className="text-center text-3xl font-semibold">Login</h2>
        </div>
        <form method="POST" action="/" className="mt-8 space-y-6 flex flex-col ">
          <div>
            <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-10">
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="relative block rounded-md w-full px-3 py-2 border border-gray-300 placeholder-white text-whiterounded-t-md focus:outline-none focus:placeholder:text-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="relative block rounded-md w-full px-3 py-2 border border-gray-300 placeholder-white text-whiterounded-t-md focus:outline-none focus:placeholder:text-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />

              <button
                onClick={Login}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-bold font-md rounded-md text-white bg-red-500 hover:bg-white hover:text-red-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
            <br />
            <p>Username : admin@123</p>
            <p>Password : admin@123</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
