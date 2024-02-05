import { create } from "zustand";

type GlobalUIStore = {
  filterIsOpen: boolean;
  toggleFilterOpen: () => void;
};

const useGlobalUIStore = create<GlobalUIStore>((set) => ({
  filterIsOpen: false,
  toggleFilterOpen: () =>
    set((state) => ({ filterIsOpen: !state.filterIsOpen })),
}));

export default useGlobalUIStore;
