import UserHeader from "../Account/UserHeader";
import { InitForm } from "./InitForm";

export const CreateSurvey = () => {
  return (
    <>
      <UserHeader />
      <div className="container mx-auto px-20">
        <h2 className="w-full border-b-2 border-gray-400 pb-4 font-sans text-2xl">
          Настройки опроса
        </h2>
        <div className="py-4">
          <InitForm />
        </div>
      </div>
    </>
  );
};
