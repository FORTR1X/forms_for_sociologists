import UserHeader from "../Account/UserHeader";
import { InitForm } from "./InitForm";
import { NavLink } from "react-router-dom";

export const CreateSurvey = () => {
  return (
    <>
      <UserHeader />
      <div className="container mx-auto px-20">
        <div className="w-full border-b-2 border-gray-400 ">
          <NavLink to="/survey">
            <h2>Настройки опроса</h2>
          </NavLink>
          <NavLink to="/surveys/content/1">
            <h2>Конструктор опроса</h2>
          </NavLink>
        </div>
        <div className="py-4">
          <InitForm />
        </div>
      </div>
    </>
  );
};
