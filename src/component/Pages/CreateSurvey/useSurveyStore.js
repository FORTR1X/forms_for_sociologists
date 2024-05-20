import { create } from 'zustand'

export const useSurveyStore = create((set) => ({
  surveyName: "",
  surveyDeadline: "unlimited",
  changeSurveyName: (newName) => set({surveyName: newName}),
  changeSurveyDeadline: (newDeadLine) => set({surveyDeadline: newDeadLine}),
}))