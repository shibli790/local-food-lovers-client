import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { AuthProvider } from "./context/AuthProvider";
import router from "./router/router";
import "./index.css";
  import { ToastContainer} from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
