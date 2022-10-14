import React, { useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const studentPortal = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [status]);

  return (
    <div className="bg-[#f8f8f8] w-screen h-screen overflow-auto">
      <div className="mt-6">
        <div className="flex flex-wrap gap-10 place-content-center">
          <div className="p-6 basis-80 flex flex-col items-center shadow-md">
            <div>
              <div className="p-2">
                <div
                  className="bg-[#b0e3e4] border-radius:50% 
        rounded-full  w-40 h-40"
                ></div>
              </div>

              <div className="py-1 px-2 ">
                <button
                  className="bg-[#b0e3e4] px-3 p-1 rounded-md text-[rgb(6,6,6)] font-bold 
                hover:bg-[#21a0a2] hover:text-white duration-200 w-40 h-8 "
                >
                  <Link href={`/students/${session?.user?._id}`}>
                    <a>Profile</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 basis-80 flex flex-col items-center shadow-md">
            <div>
              <div className="p-2">
                <div
                  className="bg-[#b0e3e4] border-radius:50% 
        rounded-full  w-40 h-40"
                ></div>
              </div>

              <div className="py-1 px-2 ">
                <button
                  className="bg-[#b0e3e4] px-3 p-1 rounded-md text-[rgb(9,9,9)] font-bold 
                hover:bg-[#21a0a2] hover:text-white duration-200 w-30 h-8 "
                >
                  Course Registration
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 basis-80 flex flex-col items-center shadow-md">
            <div>
              <div className="p-2">
                <div
                  className="bg-[#b0e3e4] border-radius:50% 
        rounded-full  w-40 h-40"
                ></div>
              </div>

              <div className="py-1 px-2 ">
                <button
                  className="bg-[#b0e3e4] px-3 p-1 rounded-md text-[rgb(3,3,3)] font-bold 
                hover:bg-[#21a0a2] hover:text-white duration-200 w-30 h-8 "
                >
                  Bills and Payments
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 basis-80 flex flex-col items-center shadow-md">
            <div>
              <div className="p-2">
                <div
                  className="bg-[#b0e3e4] border-radius:50% 
        rounded-full  w-40 h-40"
                ></div>
              </div>

              <div className="py-1 px-2 ">
                <button
                  className="bg-[#b0e3e4] px-3 p-1 rounded-md text-[rgb(5,5,5)] font-bold 
                hover:bg-[#21a0a2] hover:text-white duration-200 w-30 h-8 "
                >
                  Transcript Request
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 basis-80 flex flex-col items-center shadow-md">
            <div>
              <div className="p-2">
                <div
                  className="bg-[#b0e3e4] border-radius:50% 
        rounded-full  w-40 h-40"
                ></div>
              </div>

              <div className="py-1 px-2 ">
                <button
                  className="bg-[#b0e3e4] px-3 p-1 rounded-md text-[rgb(7,7,7)] font-bold 
                hover:bg-[#21a0a2] hover:text-white duration-200 w-40 h-8 "
                >
                  Check Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default studentPortal;
