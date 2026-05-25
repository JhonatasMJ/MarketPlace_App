import { Ionicons } from "@expo/vector-icons";
import { useModalStore } from "../store/modal-store";
import { createElement } from "react";
import { SelectionModal, SelectionModalProps } from "../components/SelectionModal/SelectionModal";

export type SelectionVariants = "primary" | "secondary" | "danger";

export interface SelectionOptions {
    text: string;
    onPress: () => void;
    icon: keyof typeof Ionicons.glyphMap;
    variant?: SelectionVariants;
}

export const useModal = () => { 
    const { open, close } = useModalStore();

    const showSelection = ({
        options,
        title,
        message,
    }: SelectionModalProps) => { 
        open(createElement(SelectionModal, {
            title,
            message,
            options,
        }))
    }

    return {
        open,
        close,
        showSelection,
    }
}