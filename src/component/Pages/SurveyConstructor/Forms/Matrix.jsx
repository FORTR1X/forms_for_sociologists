import { useEffect } from "react"
import { useSurveyConstructorStore } from "../useSurveyConstructorStore"
import { useId } from "react"
import { Container } from "../UI/Container"
import { MatrixFields } from "../UI/MatrixFields"

export const Matrix = ({form}) => {
    const initialId = useId()
    const addFormId = useSurveyConstructorStore((state) => state.addFormId)
    const addNewMatrixSubForm = useSurveyConstructorStore((state) => state.addNewMatrixSubForm)

    useEffect(() => {
        addFormId(initialId, form)
    }, [])

    return (
        <Container id={form.id} name={form.name} required={form.required} question={form.question}>
            <div>
                {form.yForms.map((yform, index) => {
                    return (
                        <MatrixFields key={`${yform.name}${index}`} isXLine={false} parentId={form.id} form={yform} placeholder={`Вариант ${index + 1}`}/>
                    )
                })}
                <p onClick={() => addNewMatrixSubForm(form.id, false)} className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">Добавить вариант</p>
            </div>
            <div>
                {form.xForms.map((xform, index) => {
                    return (
                        <MatrixFields key={`${xform.name}${index}`} isXLine={true} parentId={form.id} form={xform} placeholder={`${index + 1}`}/>
                    )
                })}
                <p onClick={() => addNewMatrixSubForm(form.id, true)} className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">Добавить вариант</p>
            </div>
        </Container>
    )
}