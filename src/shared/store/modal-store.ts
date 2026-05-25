import { ReactNode } from "react";
import { create } from "zustand";

interface ModalConfig {
  animationType?: "slide" | "fade" | "none";
  transparent?: boolean;
  statusBarTranslucent?: boolean;
}

interface ModalStore {
  isOpen: boolean;
  content: ReactNode | null;
  config: ModalConfig;
  open: (content: ReactNode, config: ModalConfig) => void;
  close: () => void;
}

export const useModalStore = create<ModalStore>()((set, get) => ({
  isOpen: false,
  content: null,
  config: {
    animationType: "fade",
    transparent: true,
    statusBarTranslucent: false,
  },
  open: (content: ReactNode, config: ModalConfig) =>
    set({
      content,
      config: {
        ...get().config,
        ...config,
      },
    }),
  close: () => set({ isOpen: false, content: null }),
}));
