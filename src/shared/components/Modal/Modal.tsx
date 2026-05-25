import { Modal as RNModal, TouchableWithoutFeedback, View } from "react-native";
import { useModalStore } from "../../store/modal-store";

export function Modal() { 

    const { isOpen, content, config, close } = useModalStore();

    if (!isOpen || !content) return null;
    return (
        <RNModal
        visible={isOpen}
        transparent={config.transparent}
        animationType={config.animationType}
        statusBarTranslucent={config.statusBarTranslucent}
        onRequestClose={close}
        >
            <TouchableWithoutFeedback onPress={close}>
                <View className="flex-1 justify-center items-center bg-black/50 px-6">
                <TouchableWithoutFeedback onPress={() => {}}>
                {content}
                </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>

        </RNModal>
    )
}