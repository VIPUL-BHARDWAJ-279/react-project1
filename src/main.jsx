import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";
import Root from "./Root.jsx";
import Login from "./components/loginPage/Login.jsx";
import Signup from "./components/loginPage/Signup.jsx";
import Home from "./components/allPages/homePage/Home.jsx";
import Men from "./components/allPages/mensPage/Men.jsx";
import Women from "./components/allPages/womensPage/Women.jsx";
import Kids from "./components/allPages/kidsPage/Kids.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "signup",
//         element: <Signup />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="women" element={<Women />} />
      <Route path="men" element={<Men />} />
      <Route path="kids" element={<Kids />} />
      {/* <Route path="" element={<Root/>}/> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
