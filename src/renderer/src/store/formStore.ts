import { create } from 'zustand'

type FormVariables = Record<string, string>

interface FormStoreState {
  formVariables: FormVariables
}

interface FormStoreActions {
  setFormVariables: (variable: string[]) => void
  setFormVariable: (variable: string, value: string) => void
  resetFormVariables: () => void
}

interface FormStore extends FormStoreState {
  actions: FormStoreActions
}

const useFormStore = create<FormStore>((set) => ({
  formVariables: {},
  actions: {
    setFormVariables: (variables) => {
      set((state) => {
        const variablesObject = variables.reduce((acc, variable) => {
          acc[variable] = state.formVariables[variable] || ''
          return acc
        }, {} as FormVariables)

        return { formVariables: variablesObject }
      })
    },
    setFormVariable: (variable, value) => {
      set((state) => {
        return {
          formVariables: {
            ...state.formVariables,
            [variable]: value
          }
        }
      })
    },
    resetFormVariables: () => {
      set((state) => {
        const emptyVariables = Object.keys(state.formVariables).reduce((acc, key) => {
          acc[key] = ''
          return acc
        }, {} as FormVariables)

        return { formVariables: emptyVariables }
      })
    }
  }
}))

export const useFormVariables = () => useFormStore((state) => state.formVariables)

export const useFormStoreActions = () => useFormStore((state) => state.actions)
