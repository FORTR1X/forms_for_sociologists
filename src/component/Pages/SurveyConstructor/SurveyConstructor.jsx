import { useState } from "react"
import { NewForm } from "./NewForm"
import { FormCreator } from "./Forms/FormCreator"

export const SurveyConstructor = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="container mx-auto p-4">
            <h1 className="w-full border-b-2 border-gray-400 pb-4 font-sans text-2xl">Конструктор опроса</h1>
            <FormCreator />
            <button onClick={() => {setOpen(true)}} className="w-full text-4xl py-1 hover:text-white hover:bg-green-500 transition-all">+</button>
            <button>Сохранить</button>
            <NewForm open={open} setOpen={setOpen}/>
        </div>
    )
}