import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Pages/layout/Layout";
import Home from "./Pages/Home/Home";
import JoinCharity from "./Pages/JoinCharity/JoinCharity";
import StudentsCharitiesHome from "./Pages/StudentsCharities/StudentsCharitiesHome";
import ExperiencePersonHome from "./Pages/ExperiencePerson/ExperiencePersonHome";
import BecomeMentorHome from "./Pages/BecomeMentor/BecomeMentorHome";
import ShowcaseHome from "./Pages/Showcase/ShowcaseHome";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/joinCharity",
        element:<JoinCharity/>,
      },
      {
        path: "/studentsCharities",
        element:<StudentsCharitiesHome/>,
      },
      {
        path: "/experiencePerson",
        element:<ExperiencePersonHome/>,
      },
      {
        path: "/becomeMentor",
        element:<BecomeMentorHome/>,
      },
      {
        path: "/showcase",
        element:<ShowcaseHome/>,
      },
    

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);