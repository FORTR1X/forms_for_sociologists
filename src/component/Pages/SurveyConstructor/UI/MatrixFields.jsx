import { useEffect, useId } from "react"
import { useSurveyConstructorStore } from "../useSurveyConstructorStore"

export const MatrixFields = ({parentId, form, placeholder, isXLine}) => {
    const initialId = useId()
    const addMatrixSubFormId = useSurveyConstructorStore((state) => state.addMatrixSubFormId)
    const changeSubMatrixFormName = useSurveyConstructorStore((state) => state.changeSubMatrixFormName)
    const removeMatrixSubForm = useSurveyConstructorStore((state) => state.removeMatrixSubForm)

    useEffect(() => {
        addMatrixSubFormId(initialId, parentId, form, isXLine)
    }, [parentId])

    const handleChangeForm = (e) => {
        const value = e.target.value
        changeSubMatrixFormName(value, form.id, parentId, isXLine)
    }

    const handleRemoveMatrixSubForm = () => {
        removeMatrixSubForm(form.id, parentId, isXLine)
    }

    return (
        <div className="p-2 flex justify-between items-center">
            <input type="text" placeholder={placeholder} value={form.variants} onChange={handleChangeForm} />
            <button onClick={handleRemoveMatrixSubForm} className="text-white bg-red-500 leading-3 p-2 rounded-lg">x</button>
        </div>
    )
}