import { useSurveyConstructorStore } from "../useSurveyConstructorStore"

export const Container = ({children, id, name, required, question, requiredIsNotNeed}) => {
    const changeFormName = useSurveyConstructorStore((state) => state.changeFormName)
    const removeForm = useSurveyConstructorStore((state) => state.removeForm)
    const changeFormRequired = useSurveyConstructorStore((state) => state.changeFormRequired)

    const handleChangeFormName = (e) => {
        const value = e.target.value
        changeFormName(value, id)
    }

    const handleChangeFormRequired = () => {
        changeFormRequired(id)
    }

    const handleRemoveForm = () => {
        removeForm(id)
    }

    return (
        <div className="my-4 flex flex-col justify-start gap-2 p-3 border-2 border-green-500 rounded-lg">
            <div className="px-2 flex justify-between items-center">
                <div>{name}</div>
                {!requiredIsNotNeed 
                    && <div className="flex items-center">
                            <p className="pr-1">обязателен</p>
                            <input type="checkbox" onChange={handleChangeFormRequired} checked={required}></input>
                        </div>
                }
                
            </div>
            <div className="p-2 border-b-2 border-green-500">
                <input onChange={handleChangeFormName} type="text" placeholder="Текст вопроса" value={question} />
            </div>
            {children}
            <button className="p-2 text-white bg-green-500 rounded-lg" onClick={handleRemoveForm}>Delete</button>
        </div>
    )
}