import React from "react";
import { RouterProvider } from "react-router";
import router from "./routes/routes";
import "./App.css";
import "flowbite/dist/flowbite.min.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover
        theme="colored"
        className={"toast-container"}
      />
    </Provider>
  );
};

export default App;
