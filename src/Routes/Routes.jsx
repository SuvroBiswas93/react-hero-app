import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout2 from "../Layout/MainLayout2";
import AppDetails from "../Pages/AppDetails";
import AppList from "../Pages/AppList";
import Errorpage from "../Pages/Errorpage";
import Loader from "../Components/Loader";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<Errorpage></Errorpage>,
    hydrateFallbackElement:<Loader></Loader>,
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
            errorElement:<Errorpage></Errorpage>,
            hydrateFallbackElement:<div className="w-screen h-screen flex justify-center items-center"><span className="loading loading-bars loading-xl"></span></div>,
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
                Component: AppList,
                loader:()=>fetch('/appsData.json')
              }
            ]
      },
              
            
          
    
]);

export default router

