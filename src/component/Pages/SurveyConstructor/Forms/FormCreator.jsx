import { useSurveyConstructorStore } from "../useSurveyConstructorStore"
import { CheckBox } from "./CheckBox"
import { Date } from "./Date"
import { Email } from "./Email"
import { Field } from "./Field"
import { Information } from "./Information"
import { Matrix } from "./Matrix"
import { Radio } from "./Radio"
import { Rating } from "./Rating"
import { Select } from "./Select"
import { TextField } from "./TextField"

export const FormCreator = () => {

    const forms = useSurveyConstructorStore((state) => state.forms)

    console.log(forms);

    return forms.map((form, index) => {
        const CreateForm = {
            checkbox: <CheckBox form={form} />,
            radio: <Radio form={form} />,
            text: <Field form={form} />,
            textfield: <TextField form={form} />,
            select: <Select form={form} />,
            rating: <Rating form={form} />,
            email: <Email form={form} />,
            date: <Date form={form} />,
            information: <Information form={form} />,
            matrix: <Matrix form={form} />
        }

        return (
            <div key={`${index}${form.name}`}>
                {CreateForm[form.type]}
            </div>
        )
    })
}