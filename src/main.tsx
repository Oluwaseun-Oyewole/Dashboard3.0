import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/loader";
import { ThemeProvider } from "./context";
import "./index.css";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Toaster position="top-center" />
      <Suspense fallback={<Loader screen />}>
        <RouterProvider router={routes} fallbackElement={<Loader screen />} />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
