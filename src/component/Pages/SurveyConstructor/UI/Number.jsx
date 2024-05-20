import { useEffect, useId } from "react"
import { useSurveyConstructorStore } from "../useSurveyConstructorStore"

export const Number = ({parentId, form, index, isOneSubForm}) => {
    const initialId = useId()
    const addSubFormId = useSurveyConstructorStore((state) => state.addSubFormId)
    const changeSubFormName = useSurveyConstructorStore((state) => state.changeSubFormName)

    useEffect(() => {
        addSubFormId(initialId, parentId, form)
    }, [parentId])

    const handleChangeForm = (e) => {
        const value = e.target.value
        if (value > 10) changeSubFormName(10, form.id, parentId)
        else if (value < 1) changeSubFormName(1, form.id, parentId)
        else changeSubFormName(value, form.id, parentId)
    }

    return (
        <div className="w-full p-2 flex justify-between items-center">
            <input className="w-full" min="1" max="10" type="number" placeholder={`${form.name} ${!isOneSubForm ? index + 1 : ""}`} value={form.variants} onChange={handleChangeForm} />
        </div>
    )
}