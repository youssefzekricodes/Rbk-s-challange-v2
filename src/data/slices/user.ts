import { createSlice } from "@reduxjs/toolkit";

export interface ModalsType {
  user: {
    firstName?: string;
    lastName?: string;
    avatar?: string;
    links?: { url: string; origin: string }[];
  };
}

export const initialStateModals: ModalsType = {
  user: {
    firstName: "",
    lastName: "",
    avatar: "",
    links: [],
  },
};

const Modals = createSlice({
  name: "Modals",
  initialState: initialStateModals,
  reducers: {
    addUserLink(state: ModalsType, { payload }: { payload: any }) {
      const updatedUserLinks = [...(state.user.links || []), payload];
      const updatedUser = { ...state.user, links: updatedUserLinks };
      state.user = updatedUser;
      console.log(updatedUser, "updatedUser");
    },
    removeUserLink(state: ModalsType, { payload }: { payload: any }) {
      const updatedUserLinks = [
        ...(state.user.links?.filter((link) => link.origin !== payload) || []),
      ];
      const updatedUser = { ...state.user, links: updatedUserLinks };
      state.user = updatedUser;
      console.log(updatedUser, "updatedUser");
    },
    updateUserInformations(state: ModalsType, { payload }: { payload: any }) {
      const updatedUser = { ...state.user, ...payload };
      state.user = { ...state.user, ...updatedUser };
    },
  },
});

export const { addUserLink, removeUserLink, updateUserInformations } =
  Modals.actions;
export default Modals.reducer;
