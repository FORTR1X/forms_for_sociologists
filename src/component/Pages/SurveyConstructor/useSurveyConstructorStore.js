import { create } from 'zustand'

export const useSurveyConstructorStore = create((set, get, produce) => ({
  forms: [],
  addNewForm: (form) => set((state) => ({forms: [...state.forms, form]})),
  addNewSubForm: (id) => {
    const newSubForm = {name: "Вариант", variants: ""}
    const forms = get().forms.map(f => 
      f.id === id ? {...f, subForms: [...f.subForms, newSubForm]} : f
    )
    set({forms})
  },
  addNewMatrixSubForm: (id, isXLine) => {
    const newMatrixSubForm = {name: "Вариант", variants: ""}
    if (isXLine) {
      const forms = get().forms.map(f => 
        f.id === id ? {...f, xForms: [...f.xForms, newMatrixSubForm]} : f
      )
      set({forms})
    } else {
      const forms = get().forms.map(f => 
        f.id === id ? {...f, yForms: [...f.yForms, newMatrixSubForm]} : f
      )
      set({forms})
    }
  },
  addFormId: (id, form) => {
    const forms = get().forms.map((f) => 
      f === form ? {...f, id: id} : f
    )
    set({forms})
  },
  addSubFormId: (id, parentId, form) => {
    if (!!parentId) {
      const parent = get().forms.filter(f => f.id === parentId)
      const subForms = parent[0].subForms.map(sf => 
        sf === form ? {...sf, id: id} : sf
      )
      const forms = get().forms.map(f => 
        f.id === parentId ? {...f, subForms: subForms} : f
      )
      set({forms})
    }
  },
  addMatrixSubFormId: (id, parentId, form, isXLine) => {
    if (!!parentId) {
      const parent = get().forms.filter(f => f.id === parentId)
      if (isXLine) {
        const subForms = parent[0].xForms.map(sf => 
          sf === form ? {...sf, id: id} : sf
        )
        const forms = get().forms.map(f => 
          f.id === parentId ? {...f, xForms: subForms} : f
        )
        set({forms})
      } else {
        const subForms = parent[0].yForms.map(sf => 
          sf === form ? {...sf, id: id} : sf
        )
        const forms = get().forms.map(f => 
          f.id === parentId ? {...f, yForms: subForms} : f
        )
        set({forms})
      }
    }
  },
  changeFormName: (value, id) => {
    const forms = get().forms.map((f) => 
      f.id === id ? {...f, question: value} : f
    )
    set({forms})
  },
  changeFormRequired: (id) => {
    const forms = get().forms.map((f) => 
      f.id === id ? {...f, required: !f.required} : f
    )
    set({forms})
  },
  changeSubFormName: (value, id, parentId) => {
    if (!!parentId) {
      const parent = get().forms.filter(f => f.id === parentId)
      const subForms = parent[0].subForms.map(sf => 
        sf.id === id ? {...sf, variants: value} : sf
      )
      const forms = get().forms.map(f => 
        f.id === parentId ? {...f, subForms: subForms} : f
      )
      set({forms})
    }
  },
  changeSubMatrixFormName: (value, id, parentId, isXLine) => {
    if (!!parentId) {
      const parent = get().forms.filter(f => f.id === parentId)
      if (isXLine) {
        const subForms = parent[0].xForms.map(sf => 
          sf.id === id ? {...sf, variants: value} : sf
        )
        const forms = get().forms.map(f => 
          f.id === parentId ? {...f, xForms: subForms} : f
        )
        set({forms})
      } else {
        const subForms = parent[0].yForms.map(sf => 
          sf.id === id ? {...sf, variants: value} : sf
        )
        const forms = get().forms.map(f => 
          f.id === parentId ? {...f, yForms: subForms} : f
        )
        set({forms})
      }
    }
  },
  removeForm: (id) => {
    const forms = get().forms.filter((f) => f.id !== id)
    set({forms})
  },
  removeSubForm: (id, parentId) => {
    if (!!parentId) {
      const parent = get().forms.filter(f => f.id === parentId)
      const subForms = parent[0].subForms.filter(sf => sf.id !== id )
      const forms = get().forms.map(f => 
        f.id === parentId ? {...f, subForms: subForms} : f
      )
      set({forms})
    }
  },
  removeMatrixSubForm: (id, parentId, isXLine) => {
    if (!!parentId) {
      const parent = get().forms.filter(f => f.id === parentId)
      if (isXLine) {
        const subForms = parent[0].xForms.filter(sf => sf.id !== id )
        const forms = get().forms.map(f => 
          f.id === parentId ? {...f, xForms: subForms} : f
        )
        set({forms})
      } else {
        const subForms = parent[0].yForms.filter(sf => sf.id !== id )
        const forms = get().forms.map(f => 
          f.id === parentId ? {...f, yForms: subForms} : f
        )
        set({forms})
      }
    }
  },
}))