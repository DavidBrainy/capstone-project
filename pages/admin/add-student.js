import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const AddStudent = () => {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    programme: "",
    college: "",
    country: "",
    city: "",
    hometown: "",
  });

  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/admin/admin-login");
    }
  }, [status]);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.student(
        `${process.env.NEXT_PUBLIC_URL}/api/students`,
        {
          data,
        }
      );

      router.push("/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <Link href="/admin/admin-login">
          <button
            type="button"
            class="text-[#326e6f] border border-[#326e6f] hover:bg-[#326e6f]
             hover:text-white focus:ring-4 focus:outline-none
              focus:ring-blue-300 font-medium rounded-full text-sm
               p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500
                dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 mt-3"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0
                01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
          </button>
        </Link>
      </div>

      <div className="flex justify-center font-extrabold text-[#326e6f] mt-6">
        STUDENT PROFILE
      </div>
      <form action="#" method="POST" onChange={handleSubmit}>
        <div className="overflow-hidden">
          <div className="bg-white px-4 py-5 ">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlfor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlfor="middleName"
                  className="block text-sm font-medium
                 text-gray-700"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  id="middleName"
                  value={data.middleName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlfor="lastName"
                  className="block text-sm font-medium
                 text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlfor="email"
                  className="block text-sm font-medium
                 text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlfor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={data.country}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>Ghana</option>
                  <option>Nigeria</option>
                  <option>Togo</option>
                </select>
              </div>

              <div className="col-span-6">
                <label
                  htmlfor="college"
                  className="block text-sm font-medium
                 text-gray-700"
                >
                  College
                </label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  value={data.college}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlfor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={data.city}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlfor="hometown"
                  className="block text-sm font-medium
                 text-gray-700"
                >
                  Home Town
                </label>
                <input
                  type="text"
                  name="hometown"
                  id="hometown"
                  value={data.hometown}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlfor="dateOfBirth"
                  className="block text-sm font-medium
                 text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  type="dateOfBirth"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  value={data.dateOfBirth}
                  onChange={handleChange}
                  placeholder="Day / Month / Year"
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlfor="Programme"
                  className="block text-sm font-medium text-gray-700"
                >
                  Programme
                </label>
                <select
                  id="programme"
                  name="programme"
                  value={data.programme}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Choose programme</option>
                  <option>BSc. Computer Science</option>
                  <option>BSc. Mathematics</option>
                  <option>BSc. Administration</option>
                  <option>BSc. Agricalture</option>
                  <option>BSc. Biomedical Engineering</option>
                  <option>BSc. Accounting and Finance</option>
                  <option>BSc. Economics and Mathematics</option>
                  <option>BSc. Computer Engineering</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlfor="department"
                  className="block text-sm font-medium
                 text-gray-700"
                >
                  Dapartment
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  value={data.department}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300
                 bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <div className="flex justify-center">
                  <button
                    className="bg-[#326e6f] mt-5 px-4 py-2 rounded-lg w-full text-white 
                    font-bold 
                  hover:bg-[#b0e3e4] hover:text-black duration-200 "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
