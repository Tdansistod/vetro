import { create } from "zustand";

const useStore = create((set) => ({
  activePage: "/",
  setActivePage: (page) => set({ activePage: page }),
}));

export default useStore;
