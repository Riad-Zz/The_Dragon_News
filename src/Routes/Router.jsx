import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";

export const router  = createBrowserRouter([
    {
        path : '/' ,
        Component : Home 
    },
    {
        path : 'about' ,
        element : <h1>This is about</h1>
    }
])