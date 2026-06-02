import React from "react";
import { Routes, Route } from "react-router";

import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Services from "./Pages/Services/services";
import Contact from "./Pages/contact/contact";
import FeedBack from "./Pages/Feedback/feedback";
import OtherData from "./Pages/others/others";
import User from "./Pages/user/user";
import CustomUser from "./userdata";
import ApiData from "./ApiData";
import UserData from "./apiuserdata";
import Todo from "./Pages/todo/todo";
import TodoList from "./Pages/todo/todolist";
import ImageSlider from "./Pages/image/images";
import Login from "./Pages/Login/login";
import SignUp from "./Pages/SignUp/signup";
import PrivateLayout from "./private-layout";
import PrivateRoute from "./components/private-routes";

const AppRoutes = () => {
    return (
<Routes>
        <Route element={<Login/>} path="/login"/>
         <Route element={<SignUp/>} path="/signup"/>


        <Route element = {<PrivateRoute>
            <PrivateLayout/>
        </PrivateRoute>}
>
        
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Services />} path="/services" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<FeedBack />} path="/feedback" />
            <Route element={<OtherData />} path="/OtherData" />
            <Route element={<User />} path="/User" />
            <Route element={<CustomUser />} path="/User/:uid" />
            <Route element={<ApiData />} path="/apiData" />
            <Route element={<UserData />} path="/apidata/:uid" />
            <Route element={<Todo />} path="/todo" />
            <Route element={<TodoList />} path="/todolist" />
            <Route element={<ImageSlider />} path="/ImageSlider" />
</Route>

        </Routes>
    )
}
export default AppRoutes;