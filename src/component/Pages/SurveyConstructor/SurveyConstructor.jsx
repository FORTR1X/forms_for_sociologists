import { useState } from "react";
import { NewForm } from "./NewForm";
import { FormCreator } from "./Forms/FormCreator";
import UserHeader from "../Account/UserHeader";
import Button from "../Account/Button";
import { NavLink } from "react-router-dom";

import { useSurveyConstructorStore } from "./useSurveyConstructorStore";
import { useSurveyStore } from "./../CreateSurvey/useSurveyStore";



export const SurveyConstructor = () => {
  const [open, setOpen] = useState(false);

  const forms = useSurveyConstructorStore((state) => state.forms);
  const surveyData = useSurveyStore((get) => get);

  const saveSurvey = async () => {
    const SURVEY = {
      survey: {
        name: surveyData.surveyName,
        questions_count: 2,
        actived: true,
        private: surveyData.surveyAnonymous,
        start_date: null,
        end_date: surveyData.surveyDeadline,
        questions: [
          {
            number: 1,
            type: "text",
            text: "fav artist?",
          },
          {
            number: 2,
            type: "text",
            text: "fav song?",
          },
        ],
      },
    };

    await fetch("localhost:8000/surveys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(SURVEY),
    });
  };

  return (
    <>
      <UserHeader />
      <div className="container mx-auto px-20">
        <div className="flex justify-between w-full border-b-2 border-gray-400 ">
          <NavLink to="/survey">
            <h2 className="text-gray-400">Настройки опроса</h2>
          </NavLink>
          <NavLink to="/surveys/content/1">
            <h2>Конструктор опроса</h2>
          </NavLink>
          <NavLink to="/surveys/result">
            <h2 className="text-gray-400">Результаты опроса</h2>
          </NavLink>
          <NavLink to="/surveys/link">
            <h2 className="text-gray-400">Ссылка на опрос</h2>
          </NavLink>
        </div>
      </div>
      <div className="container mx-auto px-20">
        {/* <h1 className="w-full border-b-2 border-gray-400 pb-4 font-sans text-2xl">
          Конструктор опроса
        </h1> */}
        <FormCreator />
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="w-full text-4xl mb-6 mt-6 py-1 hover:text-white hover:bg-green-400 rounded-xl transition-all"
        >
        +
        </button>
        <Button text={"Сохранить"} onClick={saveSurvey} />
        {/* <button>Сохранить</button> */}
        <NewForm open={open} setOpen={setOpen} />
      </div>
    </>
  );
};
