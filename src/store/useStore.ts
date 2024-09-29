import { create } from "zustand";
import createCommonSlice from "./slices/commonSlice";

const useStore = create<any>()((...a) => ({
  ...createCommonSlice(...a),
}));

export default useStore;
