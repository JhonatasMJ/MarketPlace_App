import { Ionicons } from "@expo/vector-icons";
import { useModalStore } from "../store/modal-store";
import { createElement } from "react";
import { SelectionModal } from "../components/SelectionModal/SelectionModal";

interface SelectionOptions {
    text: string;
    onPress: () => void;
    icon: keyof typeof Ionicons.glyphMap;
    variant?: "primary" | "secondary" | "danger";
}

export const useModal = () => { 
    const { open, close } = useModalStore();

    const showSelection = (config : {
        title: string;
        message?: string;
        options: SelectionOptions[];
    }) => { 
        open(createElement(SelectionModal, {

        }))
    }



    return {
        open,
        close,
        showSelection,
    }
}