import { useSurveyConstructorStore } from "./useSurveyConstructorStore";

const allForms = [
    {
        name: "Выбор одного варианта",
        type: "radio",
        question: "",
        required: false,
        subForms: [
            {
                name: "Вариант",
                variants: "",
            },
            {
                name: "Вариант",
                variants: "",
            },
            {
                name: "Вариант",
                variants: "",
            }
        ],
    },
    {
        name: "Выбор нескольких",
        type: "checkbox",
        question: "",
        required: false,
        subForms: [
            {
                name: "Вариант",
                variants: "",
            },
            {
                name: "Вариант",
                variants: "",
            },
            {
                name: "Вариант",
                variants: "",
            }
        ],
    },
    {
        name: "Строковое поле",
        type: "text",
        question: "",
        required: false,
        subForms: [
            {
                name: "Подсказка",
                variants: "",
            }
        ],
    },
    {
        name: "Текстовое поле",
        type: "textfield",
        question: "",
        required: false,
        subForms: [
            {
                name: "Подсказка",
                variants: "",
            }
        ],
    },
    {
        name: "Открытый список",
        type: "select",
        question: "",
        required: false,
        subForms: [
            {
                name: "Вариант",
                variants: "",
            },
            {
                name: "Вариант",
                variants: "",
            },
            {
                name: "Вариант",
                variants: "",
            }
        ],
    },
    {
        name: "Шкала оценки",
        type: "rating",
        question: "",
        required: false,
        subForms: [
            {
                name: "От",
                variants: "",
            },
            {
                name: "До",
                variants: "",
            }
        ],
    },
    {
        name: "E-Mail респондента",
        type: "email",
        question: "",
        required: false,
        subForms: [
            {
                name: "Подсказка",
                variants: "",
            }
        ],
    },
    {
        name: "Дата",
        type: "date",
        question: "",
        required: false,
    },
    {
        name: "Текстовый блок",
        type: "information",
        question: "",
        required: false,
        subForms: [
            {
                name: "Текст",
                variants: "",
            }
        ],
    },
    {
        name: "Матрица",
        type: "matrix",
        question: "",
        required: false,
        yForms: [
            {
                name: "Вариант",
                variants: "",
            },
            {
                name: "Вариант",
                variants: "",
            },
            {
                name: "Вариант",
                variants: "",
            }
        ],
        xForms: [
            {
                name: "",
                variants: "",
            },
            {
                name: "",
                variants: "",
            },
            {
                name: "",
                variants: "",
            },
            {
                name: "",
                variants: "",
            },
            {
                name: "",
                variants: "",
            },
        ],
    },
]

export const NewForm = ({open, setOpen}) => {

    const addNewForm = useSurveyConstructorStore((state) => state.addNewForm)

    const test = (form) => {
        addNewForm(form);
        setOpen(false)
    }

    return (
        <div onClick={() => setOpen(false)} className={`h-full w-full bg-black bg-opacity-40 fixed top-0 left-0 flex items-center justify-center ${open ? "scale-1" : "scale-0"}`}>
            <div className="w-[600px] h-auto bg-white rounded-xl p-5 pb-20" onClick={(e) => {e.stopPropagation()}}>
                <div className="flex w-full justify-end pb-4">
                    <button onClick={() => setOpen(false)} className="p-2 hover:bg-green-500 text-xl hover:text-white transition-all rounded-lg">X</button>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                    {allForms.map((el, i) => {
                        return (
                            <div key={i} onClick={() => test(el)} className="border-2 hover:border-green-300 border-green-500 rounded-lg p-2 cursor-pointer transition-all">
                                {el.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}