import { StateCreator } from 'zustand'
import i18next from 'i18next'

const currentLanguage = i18next.language || 'fr'

export interface ICommon {
	language: string
	setLanguage: (value: string) => void
}

const createCommonSlice: StateCreator<ICommon> = (set, get) => ({
	language: currentLanguage,
	setLanguage(value) {
		set(state => ({ ...state, language: value }))
	},
})

export default createCommonSlice
