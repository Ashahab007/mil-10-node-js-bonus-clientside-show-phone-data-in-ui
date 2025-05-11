import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root.jsx";
import Phones from "./components/Phones.jsx";
import Phone from "./components/Phone.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/phones",
        Component: Phones,
        // 3.0 Now after 2.6 from my-phone-server folder, fetching the data from browser url address but it will show error. কারণ একটা port থেকে আরেকটা port এর data fetch করার সময় block করে দেয়  security reason এর জন্য। তাই CORS install করতে হবে। so go to express js website Resources => middlewear => cors "npm i cors" in backend server which was running in terminal "my-phone-server". After install run in that server "nodemon .index.js". Now need to setup the cors so go to "my-phone-server" for rest of the steps. here using loader we fetch the data from backend.
        loader: () => fetch("http://localhost:5000/phones"),
      },

      // 4.2 Now created the Phone component to show the each phone data from backend using dynamic id pass the param by directly destructure it
      {
        path: "/phone/:id", // this path is created on the basis of Phones component's Link, created this dynamic path.
        Component: Phone,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phones/${params.id}`), //fetching  each phone from the backend server by id.
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
