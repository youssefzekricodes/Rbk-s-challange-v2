import { createSlice } from '@reduxjs/toolkit';

export interface ModalsType {
  modalOpen: boolean;
  children: any;
  modalType: string;
}

export const initialStateModals: ModalsType = {
  modalOpen: false,
  children: '',
  modalType: 'Modal__Center',
};

const Modals = createSlice({
  name: 'Modals',
  initialState: initialStateModals,
  reducers: {
    showModal(state, { payload }: { payload: { children: string; type: string } }) {
      state.modalOpen = true;
      state.children = payload.children;
      state.modalType = payload.type;
    },
    hideModal(state) {
      state.modalOpen = false;
      state.children = '';
      state.modalType = 'Modal__Center';
    },
  },
});

export const { showModal, hideModal } = Modals.actions;
export default Modals.reducer;
