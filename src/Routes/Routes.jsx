import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import MainLayout2 from "../Layout/MainLayout2";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
     hydrateFallbackElement:<p>Loading...</p>,
    children :[
        {
            index: true,
            Component:Home,
            loader:()=>fetch('/appsData.json')
        },
       
        
    ]
  },
   {
            path:'/apps',
            Component:MainLayout2,
            hydrateFallbackElement:<p>Loading...</p>,
            children:[
              {
                index:true,
                Component:Apps,
                loader:()=>fetch('/appsData.json')
              },
              {
                path:'appdetails/:id',
                Component:AppDetails,
                loader:()=>fetch('/appsData.json')
              },
              {
                path:'install',
                Component:Installation
              }
            ]
      },
              
            
          
    
]);

export default router

