import { create } from "zustand";

interface IModalHouseStore {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

const ModalHouseStore = create<IModalHouseStore>((set) => ({
  open: false,
  toggleDrawer: (open: boolean) => set({ open }),
}));
export default ModalHouseStore;
