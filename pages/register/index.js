import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const register = () => {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = data;

    if (
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      password === "" &&
      confirmPassword === ""
    ) {
      setError("Please provide all the information");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (password !== confirmPassword) {
      setError("Please do not match");
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
      );

      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex justify-center font-extrabold text-[#326e6f]">
        REGISTRATION FORM
      </div>

      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl w-full p-3 rounded space-y-3"
        >
          {error && <p>{error}</p>}
          <div className="flex justify-center w-full">
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent 
        border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400
         dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 
         peer"
            >
              <option selected="">Choose a User</option>
              <option value="user">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label
              htmlfor="firstName"
              class="block mb-2 text-sm 
                font-medium text-gray-900 dark:text-gray-300"
            >
              FristName
            </label>
            <input
              type="firstName"
              id="firstName"
              name="firstName"
              class="shadow-sm bg-gray-50 
                border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full 
                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                dark:shadow-sm-light"
              placeholder="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlfor="middleName"
              class="block mb-2 text-sm 
                font-medium text-gray-900 dark:text-gray-300"
            >
              MiddleName
            </label>
            <input
              type="middleName"
              id="middleName"
              name="middleName"
              class="shadow-sm bg-gray-50 
                border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full 
                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                dark:shadow-sm-light"
              placeholder="middleName"
              value={data.middleName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlfor="lastName"
              class="block mb-2 text-sm 
                font-medium text-gray-900 dark:text-gray-300"
            >
              LastName
            </label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              class="shadow-sm bg-gray-50 
                border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full 
                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                dark:shadow-sm-light"
              placeholder="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlfor="email"
              class="block mb-2 text-sm 
                font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="shadow-sm bg-gray-50 
                border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full 
                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                dark:shadow-sm-light"
              placeholder="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlfor="password"
              class="block mb-2 text-sm 
                font-medium text-gray-900 dark:text-gray-300"
            >
              password
            </label>
            <input
              type="password"
              id="pasword"
              name="password"
              class="shadow-sm bg-gray-50 
                border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full 
                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                dark:shadow-sm-light"
              placeholder="**********"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlfor="password"
              class="block mb-2 text-sm 
                font-medium text-gray-900 dark:text-gray-300"
            >
              confirmPassword
            </label>
            <input
              type="Password"
              id="confirmPasword"
              name="confirmPassword"
              class="shadow-sm bg-gray-50 
                border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full 
                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                dark:shadow-sm-light"
              placeholder="**********"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-[#326e6f] px-7 py-2 rounded-lg w-full text-white font-bold 
                hover:bg-[#b0e3e4] hover:text-black duration-200 "
            >
              register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
