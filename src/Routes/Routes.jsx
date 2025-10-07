import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
     hydrateFallbackElement:<p>Loading...</p>,
    children :[
        {
            index: true,
            loader:()=>fetch('./funitureData.json'),
            Component:Home
        },
    ]
  },
]);

export default router
