import React, { useState, } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Admin = () => {
  const [data, SetData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const [error, setError] = useState();

  const handleChange = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push(router.query.redirect || "/admin/add-student");
    }
  };

  return (
    <div
      className="flex flx-col items-center justify-center bg-[#b0e3e4]
     w-screen h-screen overflow-hidden"
    >
      <div>
        <div className="">
          <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <div className="mb-6">
              <label
                htmlfor="email"
                class="block mb-2 text-sm 
                font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
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
                placeholder="info@progdavidbrainy.com"
                required=""
                value={data.value}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlfor="password"
                class="block mb-2 text-sm font-medium
                text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="shadow-sm bg-gray-50 
                border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                 dark:shadow-sm-light"
                required=""
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 bg-gray-50 rounded 
                 border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700
                 dark:border-gray-600 dark:focus:ring-blue-600
                 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <label
                htmlfor="terms"
                className="ml-2 text-sm font-medium text-gray-900
               dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-[#326e6f]
               hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-[#326e6f] hover:bg-[#10b7ba]
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
              text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
              dark:focus:ring-blue-800 w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
