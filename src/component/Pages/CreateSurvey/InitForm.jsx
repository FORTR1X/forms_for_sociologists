import { useNavigate } from "react-router-dom";
import { useSurveyStore } from "./useSurveyStore";
import Button from "../Account/Button";
import Uploader from "../Account/component/Uploader";

export const InitForm = () => {
  const surveyName = useSurveyStore((state) => state.surveyName);
  const changeSurveyName = useSurveyStore((state) => state.changeSurveyName);

  const surveyDeadline = useSurveyStore((state) => state.surveyDeadline);
  const changeSurveyDeadline = useSurveyStore(
    (state) => state.changeSurveyDeadline
  );

  const surveyMinTime = useSurveyStore((state) => state.surveyMinTime);
  const changeSurveyMinTime = useSurveyStore(
    (state) => state.changeSurveyMinTime
  );

  const surveyAttemptCount = useSurveyStore(
    (state) => state.surveyAttemptCount
  );
  const changeSurveyAttemptCount = useSurveyStore(
    (state) => state.changeSurveyAttemptCount
  );

  const surveyAnonymous = useSurveyStore((state) => state.surveyAnonymous);
  const changeSurveyAnonymous = useSurveyStore(
    (state) => state.changeSurveyAnonymous
  );

  const surveyCountAnswers = useSurveyStore((state) => state.surveyCountAnswers);
  const changeSurveyCountAnswers = useSurveyStore(
    (state) => state.changeSurveyCountAnswers
  );

  const navigate = useNavigate();

  const changeSurveyDeadlineForm = (e) => {
    changeSurveyDeadline(e.target.value);
  };
  const changeSurveyMinTimeForm = (e) => {
    changeSurveyMinTime(e.target.value);
  };
  const changeSurveyAttemptCountForm = (e) => {
    changeSurveyAttemptCount(e.target.value);
  };
  const changeSurveyAnonymousForm = (e) => {
    changeSurveyAnonymous(e.target.value);
  };
  const changeSurveyCountAnswersForm = (e) => {
    changeSurveyCountAnswers(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/surveys/content/1");
      }}
    >
      <div className="py-4">
        <h3 className="py-2 text-xl">Обложка опроса</h3>
        <p className="py-2 text-gray-400">
          Выберете изображение для обложки опроса
        </p>
        <div className="w-72">
          <Uploader />
        </div>
      </div>
      <div className="py-4">
        <h3 className="py-2 text-xl">Название</h3>
        <p className="py-2 text-gray-400">Укажите название нового опроса</p>
        <div className="border-2 border-green-500 rounded-lg">
          <input
            class="p-2 w-full focus-visible:outline-none"
            type="text"
            placeholder="Название"
            onChange={(e) => changeSurveyName(e.target.value)}
            value={surveyName}
          />
        </div>
      </div>

      <div className="py-4">
        <h3 className="py-2 text-xl">Описание опроса</h3>
        <p className="py-2 text-gray-400">Укажите описание нового опроса</p>
        <div className="border-2 border-green-500 rounded-lg">
          <input
            class="p-2 w-full focus-visible:outline-none"
            type="text"
            placeholder="Описание"
            onChange={(e) => changeSurveyName(e.target.value)}
            value={surveyName}
          />
        </div>
      </div>
      <div className="py-4">
        <h3 className="py-2 text-xl">Срок активности</h3>
        <p className="py-2 text-gray-400">
          По окончании срока форма будет закрыта, но результаты будут доступны
          всегда
          <br />
          Срок можно будет изменить в настройках в любое время
        </p>
        <div className="flex py-2">
          <div>
            <input
              onChange={changeSurveyDeadlineForm}
              className="cursor-pointer"
              checked={surveyDeadline === "unlimited"}
              type="radio"
              name="surveyDeadline"
              value="unlimited"
            />
            <label className="pl-2">Не ограничен</label>
          </div>
          <div className="pl-4">
            <input
              onChange={changeSurveyDeadlineForm}
              className="cursor-pointer"
              checked={surveyDeadline === "1Minutes"}
              type="radio"
              name="surveyDeadline"
              value="1Minutes"
            />
            <label className="pl-2">Неделя</label>
          </div>
          <div className="pl-4">
            <input
              onChange={changeSurveyDeadlineForm}
              className="cursor-pointer"
              checked={surveyDeadline === "30Seconds"}
              type="radio"
              name="surveyDeadline"
              value="30Seconds"
            />
            <label className="pl-2">Временной промежуток</label>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h3 className="py-2 text-xl">Минимальное время прохождения опроса</h3>
        <p className="py-2 text-gray-400">
          Указав минимальное время прохождения опроса, результаты, которые были
          получены за меньшее время, не будут учитываться в статистике. В
          выгрузке ответов они отобразятся, но будут помечены как
          недействительные.
          <br />
          Минимальное время прохождения изменить будет нельзя
        </p>
        <div className="flex py-2">
          <div>
            <input
              onChange={changeSurveyMinTimeForm}
              className="cursor-pointer"
              checked={surveyMinTime === "unlimited"}
              type="radio"
              name="surveyMinTime"
              value="unlimited"
            />
            <label className="pl-2">Не ограничен</label>
          </div>
          <div className="pl-4">
            <input
              onChange={changeSurveyMinTimeForm}
              className="cursor-pointer"
              checked={surveyMinTime === "7Minutes"}
              type="radio"
              name="surveyMinTime"
              value="7Minutes"
            />
            <label className="pl-2">7 минут</label>
          </div>
          <div className="pl-4">
            <input
              onChange={changeSurveyMinTimeForm}
              className="cursor-pointer"
              checked={surveyMinTime === "10Day"}
              type="radio"
              name="surveyMinTime"
              value="10Day"
            />
            <label className="pl-2">Временной промежуток</label>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h3 className="py-2 text-xl">Повторное прохождение опроса</h3>
        <p className="py-2 text-gray-400">
          Сколько раз может пройти опрос один пользователь.
          <br />
          Вы сможете изменить этот параметр при необходимости
        </p>
        <div className="flex py-2">
          <div>
            <input
              onChange={changeSurveyAttemptCountForm}
              className="cursor-pointer"
              checked={surveyAttemptCount === "unlimited"}
              type="radio"
              name="surveyAttemptCount"
              value="unlimited"
            />
            <label className="pl-2">
              Не ограниченое количество прохождений
            </label>
          </div>
          <div className="pl-4">
            <input
              onChange={changeSurveyAttemptCountForm}
              className="cursor-pointer"
              checked={surveyAttemptCount === "one"}
              type="radio"
              name="surveyAttemptCount"
              value="one"
            />
            <label className="pl-2">Единоразовое прохождение</label>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h3 className="py-2 text-xl">Анонимность опроса</h3>
        <p className="py-2 text-gray-400">
          В анонимных опросах имя пользователя остается неизвестным.
          <br />
          Вы не сможете изменить этот параметр в дальнейшем
        </p>
        <div className="flex py-2">
          <div>
            <input
              onChange={changeSurveyAnonymousForm}
              className="cursor-pointer"
              checked={surveyAnonymous === "anonymous"}
              type="radio"
              name="surveyAnonymous"
              value="anonymous"
            />
            <label className="pl-2">Анонимный опрос</label>
          </div>
          <div className="pl-4">
            <input
              onChange={changeSurveyAnonymousForm}
              className="cursor-pointer"
              checked={surveyAnonymous === "open"}
              type="radio"
              name="surveyAnonymous"
              value="open"
            />
            <label className="pl-2">Открытый опрос</label>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h3 className="py-2 text-xl">
          Закрытие опроса по достижению указанного количества ответов
        </h3>
        <p className="py-2 text-gray-400">
          Указав необходимое количество ответов, опрос станет недоступным, когда
          будет собрано заданное количество голосов
          <br />
          Вы сможете изменить этот параметр при необходимости
        </p>
        <div className="flex py-2">
          <div>
            <input
              onChange={changeSurveyCountAnswersForm}
              className="cursor-pointer"
              checked={surveyCountAnswers === "count"}
              type="radio"
              name="surveyCountAnswers"
              value="count"
            />
            <label className="pl-2">Указать количество</label>
          </div>
          <div className="pl-4">
            <input
              onChange={changeSurveyCountAnswersForm}
              className="cursor-pointer"
              checked={surveyCountAnswers === "nocount"}
              type="radio"
              name="surveyCountAnswers"
              value="nocount"
            />
            <label className="pl-2">Бесконечное число ответов</label>
          </div>
        </div>
      </div>

      <button type="submit" className="py-4">
        <Button text={"Продолжить"} />
      </button>
    </form>
  );
};
