import { createSlice } from "@reduxjs/toolkit";

export interface ModalsType {
  modalOpen: boolean;
}

export const initialStateModals: ModalsType = {
  modalOpen: false,
};

const Modals = createSlice({
  name: "Modals",
  initialState: initialStateModals,
  reducers: {
    showModal(state: { modalOpen: boolean }) {
      state.modalOpen = true;
    },
    hideModal(state: { modalOpen: boolean }) {
      state.modalOpen = false;
    },
  },
});

export const { showModal, hideModal } = Modals.actions;
export default Modals.reducer;
