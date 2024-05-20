import { useNavigate } from "react-router-dom"
import { useSurveyStore } from "./useSurveyStore"

export const InitForm = () => {
    const surveyName = useSurveyStore((state) => state.surveyName)
    const surveyDeadline = useSurveyStore((state) => state.surveyDeadline)
    const changeSurveyName = useSurveyStore((state) => state.changeSurveyName)
    const changeSurveyDeadline = useSurveyStore((state) => state.changeSurveyDeadline)

    const navigate = useNavigate()

    const changeSurveyDeadlineForm = (e) => {
        changeSurveyDeadline(e.target.value)
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            navigate("/surveys/content/1");
        }}>
            <div className="py-4">
                <h3 className="py-2 text-xl">Название</h3>
                <p className="py-2 text-gray-400">Укажите название нового опроса</p>
                <div className="border-2 border-green-500 rounded-lg">
                    <input class="p-2 w-full focus-visible:outline-none" type="text" placeholder="Название" onChange={(e) => changeSurveyName(e.target.value)} value={surveyName}/>
                </div>
                
            </div>
            <div className="py-4">
                <h3 className="py-2 text-xl">Срок активности</h3>
                <p className="py-2 text-gray-400">
                    По окончании срока форма будет закрыта, но результаты будут доступны всегда<br />
                    Срок можно будет изменить в настройках в любое время
                </p>
                <div className="flex py-2">
                    <div>
                        <input onChange={changeSurveyDeadlineForm} className="cursor-pointer" checked={surveyDeadline === "unlimited"} type="radio" name="surveyDeadline" value="unlimited" />
                        <label className="pl-2">Не ограничен</label>
                    </div>
                    <div className="pl-4">
                        <input onChange={changeSurveyDeadlineForm} className="cursor-pointer" checked={surveyDeadline === "1Minutes"} type="radio" name="surveyDeadline" value="1Minutes" />
                        <label className="pl-2">1 минута</label>
                    </div>
                    <div className="pl-4">
                        <input onChange={changeSurveyDeadlineForm} className="cursor-pointer" checked={surveyDeadline === "30Seconds"} type="radio" name="surveyDeadline" value="30Seconds" />
                        <label className="pl-2">30 секунд</label>
                    </div>
                </div>
                <button type="submit" className="py-4">
                    Продолжить
                </button>
            </div>
        </form>
    )
}