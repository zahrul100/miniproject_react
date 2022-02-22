import { useContext, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { RootContext } from "../App";
import MiddlewareAuth from "../middleware/middlewareAuth";
import Dashboard from "../pages/dashboard/Dashboard";
// import { RootContext } from "../App";
import Login from "../pages/login/Login";
import Registers from "../pages/register/Register";
import VacancyDetail from "../pages/vacancyDetail/VacancyDetail";
import Vacancy from "../pages/vacany/Vacancy";

const AppRouters = () => {
  const data = useContext(RootContext);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registers />} />
        <Route path="/dashboard" element={data.userInfo !== null?<Outlet/> :<MiddlewareAuth/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="home" element={<><Vacancy /></>} />
        </Route>

        <Route path="/vacancy" element={<><Vacancy /></>} />
        <Route path="/vacancy/:id" element={<><VacancyDetail /></>} />
      </Routes>
    </>
  );
};

export default AppRouters;
