// import React, { useState, usernameString, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../LoginForm/LoginForm"

// const NavBarUser = () => {
//     const [credentials, setCredentials] = useState({});
//     useEffect(() => {
        
//         setInterval(() => {
//             const userString = localStorage.getItem("username");
//             const username = JSON.parse(usernameString);
//             setCredentials(username);
//         }, [])
//         }, 5000);

//         const logout = () => {
//             return localStorage.removeItem("username");
//         }

//         if (!username) {
//             return (
//                 <div>
//                     <Link to="/login">Login</Link> 
//                     <Link to="/signup">Sign Up</Link>
//                 </div>
//             )
//         }
// }

// export default NavBarUser