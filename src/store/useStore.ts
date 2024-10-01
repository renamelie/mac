import { create } from 'zustand'
import createCommonSlice from './slices/commonSlice'

export interface ICommon {
	language: string
	setLanguage: (value: string) => void
}

const useStore = create<ICommon>()((...a) => ({
	...createCommonSlice(...a),
}))

export default useStore
