import { useEffect } from "react"
import { useSurveyConstructorStore } from "../useSurveyConstructorStore"
import { useId } from "react"
import { Container } from "../UI/Container"

export const Date = ({form}) => {
    const initialId = useId()
    const addFormId = useSurveyConstructorStore((state) => state.addFormId)

    useEffect(() => {
        addFormId(initialId, form)
    }, [])

    return (
        <Container id={form.id} name={form.name} required={form.required} question={form.question} isOneSubForm={true}>
        </Container>
    )
}