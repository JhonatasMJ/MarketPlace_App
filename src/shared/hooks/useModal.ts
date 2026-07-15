import { Ionicons } from "@expo/vector-icons";
import { useModalStore } from "../store/modal-store";
import { createElement } from "react";
import {
  SelectionModal,
  SelectionModalProps,
} from "../components/Modals/SelectionModal/SelectionModal";
import { SuccessModal, SuccessModalProps } from "../components/Modals/SuccessModal/SuccessModal";

export type SelectionVariants = "primary" | "secondary" | "danger";

export interface SelectionOptions {
  text: string;
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  variant?: SelectionVariants;
}

export const useModal = () => {
  const { open, close } = useModalStore();

  const showSelection = ({ options, title, message }: SelectionModalProps) => {
    open(
      createElement(SelectionModal, {
        title,
        message,
        options,
      }),
    );
  };

  const showSuccess = (config: SuccessModalProps) => {
    open(
      createElement(SuccessModal, {
        ...config,
        onButtonPress: () => {
            if (config.onButtonPress) {
                config.onButtonPress();
            }
            close();
        }
      }),
    );
  };

  return {
    open,
    close,
    showSelection,
    showSuccess,
  };
};
