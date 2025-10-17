import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import HomeNews from "../Pages/Home/HomeNews";
import CategoryNews from "../Components/CategoryNews/CategoryNews";

export const router  = createBrowserRouter([
    {
        path : '/' ,
        Component : Home ,
        children : [
            { index: true , Component:HomeNews} , 
            {path : 'category/:id' , 
                Component:CategoryNews , 
                loader :()=> fetch('/news.json'), 
            }
        ]
    },
    {
        path : 'about' ,
        element : <h1>This is about</h1>
    }
])