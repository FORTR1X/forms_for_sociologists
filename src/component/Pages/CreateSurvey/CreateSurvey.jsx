import { InitForm } from "./InitForm"

export const CreateSurvey = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="w-full border-b-2 border-gray-400 pb-4 font-sans text-2xl">Создать форму</h1>
            <div className="py-4">
                <InitForm />
            </div>
        </div>
    )
}