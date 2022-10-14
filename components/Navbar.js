import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: session, status } = useSession();

  console.log(session);
  const router = useRouter();
  return (
    <div className="flex-auto shadow-3xl  bg-[#b0e3e4] w-screen shadow-slate-500 py-5">
      <nav className="flex justify-between max-w-7xl mx-auto">
        <div>
          <span className="text-[#326e6f] px-9 text-3xl font-bold md-2">
            {session ? (
              <span className="text-white text-3xl">{`Hi, ${session.firstName} ${session.lastName}`}</span>
            ) : (
              <span>STUDENT PORTAL</span>
            )}
          </span>
        </div>

        <div className="flex text-xl px-4">
          <ul className="text-white flex items-center gap-5 px-4">
            <Link href="/">
              <a className=" hover:text-[#326e6f] duration-200 font-bold">
                <li>Home</li>
              </a>
            </Link>
            <Link href="/login">
              <a className=" hover:text-[#326e6f] duration-200 font-bold">
                {status === "authenticated" ? (
                  <button onClick={() => signOut({ callbackUrl: "/" })}>
                    Logout
                  </button>
                ) : (
                  <button>Login</button>
                )}
              </a>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
