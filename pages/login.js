import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      //  ...data,
      email: data.email,
      password: data.password,
      redirect: false,
      // callbackUrl:"/"
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push(router.query.redirect || "/student-portal/dashboard");
    }
  };

  return (
    <div
      className="relative w-screen h-screen flex flex-col justify-center items-center 
      overflow-hidden py-4 sm:py-12 bg-[#b0e3e4]"
    >
      <div className="mx-auto grid w-full max-w-4xl px-5 md:grid-cols-6 lg:px-0 shadow-md">
        <div className="col-span-4">
          <img src="../images/davve.jpg" alt="" />
        </div>

        {/* login session */}
        <div className="col-span-2 bg-white">
          <div className="p-3 mt-48">
            <div className="text-center font-bold py-1 text-3xl">Login</div>

            <div>
              <p className="text-gray-400 text-sm flex justify-center">
                Enter credentials to access this platform
              </p>
            </div>

            <form
              className="max-w-xl w-full p-3 rounded space-y-3"
              onSubmit={handleSubmit}
            >
              {error && <p>{error}</p>}
              <div className="mb-6">
                <label
                  htmlfor="email"
                  className="block mb-2 text-sm 
                  font-medium text-gray-900 dark:text-gray-300"
                ></label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="shadow-sm bg-gray-50 
                  border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full 
                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                dark:shadow-sm-light"
                  placeholder="info@progdavidbrainy.com"
                  required=""
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlfor="password"
                  className="block mb-2 text-sm font-medium
                  text-gray-900 dark:text-gray-300"
                ></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="shadow-sm bg-gray-50 
                  border border-gray-300 text-gray-900 text-sm rounded-lg
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                  dark:shadow-sm-light"
                  required=""
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-[#326e6f] block w-full py-2 rounded-lg text-white font-bold 
                hover:bg-[#b0e3e4] hover:text-black duration-200 "
                >
                  Login
                </button>
              </div>
            </form>

            <div className="flex justify-center text-sm">
              <div>You don't have a Student ID or Password?</div>
            </div>
            <div className="flex justify-center text-sm">
              <div className="text-[#7ebcbd]">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
