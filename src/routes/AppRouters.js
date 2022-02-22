import { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { RootContext } from "../App";
import MiddlewareAuth from "../middleware/middlewareAuth";
import Dashboard from "../pages/dashboard/Dashboard";
import Homepage from "../pages/homepage/Homepage";
// import { RootContext } from "../App";
import Login from "../pages/login/Login";
import Registers from "../pages/register/Register";
import VacancyDetail from "../pages/vacancyDetail/component/VacancyDetail";
import VacancyListBloc from "../pages/vacany/bloc/VacancyListBloc";
import VacancyService from "../pages/vacany/service/VacancyService";
import Vacancy from "../pages/vacany/component/VacancyList";
import VacancyDetailBloc from "../pages/vacancyDetail/bloc/VacancyDetailBloc";

const AppRouters = () => {
  const data = useContext(RootContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registers />} />
        <Route path="/dashboard" element={data.userInfo !== null?<Outlet/> :<MiddlewareAuth/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="home" element={<><Vacancy /></>} />
        </Route>

        <Route path="/vacancy" element={<><Vacancy bloc={()=> VacancyListBloc(VacancyService)}/></>} />
        <Route path="/vacancy/:id" element={<><VacancyDetail bloc={()=> VacancyDetailBloc(VacancyService)} /></>} />
      </Routes>
    </>
  );
};

export default AppRouters;
