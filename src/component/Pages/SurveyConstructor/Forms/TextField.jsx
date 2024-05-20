import { useEffect } from "react"
import { useSurveyConstructorStore } from "../useSurveyConstructorStore"
import { useId } from "react"
import { Container } from "../UI/Container"
import { Input } from "../UI/Input"

export const TextField = ({form}) => {
    const initialId = useId()
    const addFormId = useSurveyConstructorStore((state) => state.addFormId)

    useEffect(() => {
        addFormId(initialId, form)
    }, [])

    return (
        <Container id={form.id} name={form.name} required={form.required} question={form.question} isOneSubForm={true}>
            <div>
                {form.subForms.map((subForm, index) => {
                    return (
                        <Input key={`${form.name}${index}`} parentId={form.id} form={subForm} index={index} isOneSubForm={true}/>
                    )
                })}
            </div>
        </Container>
    )
}