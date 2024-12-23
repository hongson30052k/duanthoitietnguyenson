import { create } from "zustand";

interface IModalStore {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

const ModalStore = create<IModalStore>((set) => ({
  open: false,
  toggleDrawer: (open: boolean) => set({ open }),
}));
export default ModalStore;
