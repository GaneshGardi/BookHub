import React from "react";
import { Link } from "react-router-dom";

function Navbar({role}) {
  return (
    <nav className="fixed top-0 w-full">
      <div className="flex justify-between md:px-20 p-4 bg-sky-500 text-xl">
        <div>
          <Link className="font-bold" to={"/"}>BookHub</Link>
        </div>
        <div className="space-x-4 ">
         {(role === 'admin' || role === 'student') && (
           
           <Link className="hover:underline font-semibold" to={"/books"}>Books</Link>
         )}
          

          {role === 'admin' &&
           <> 
            <Link className="hover:underline font-semibold" to={"/addbook"}>Add Book</Link>  
            <Link className="hover:underline font-semibold" to={"/addstudent"}>Add Student</Link>  
            <Link className="hover:underline font-semibold" to={"/dashboard"}>Dashboard</Link>  
          </>}
          {role === '' ? 
          (<Link className="hover:underline font-semibold" to={"/login"}>Login</Link> )
          : (<Link className="hover:underline font-semibold" to={"/logout"}>Logout</Link> )
           }
             
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
