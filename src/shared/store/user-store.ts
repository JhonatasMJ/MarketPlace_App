import { UserInterface } from "../interfaces/user";
import { create } from "zustand";

interface SetSessionParams {
  user: UserInterface | null;
  token: string | null;
  refreshToken: string | null;
}

interface UpdateTokensParams {
  token: string;
  refreshToken: string;
}

export interface UserStore {
  user: UserInterface | null;
  token: string | null;
  refreshToken: string | null;
  setSession: (sessionData: SetSessionParams) => void;
  logout: () => void;
  updateTokens: (updateTokensData: UpdateTokensParams) => void;
}

/* Zustand store for user session management de usuario */
export const useUserStore = create<UserStore>((set) => ({
  user: null,
  token: null,
  refreshToken: null,
  logout: () => {},
  setSession: (sessionData) => {
      set({ ...sessionData });
    },
    updateTokens: (updateTokensData) => {
      set({ ...updateTokensData });
    },
}));
