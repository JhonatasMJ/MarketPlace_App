import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { buttonVariants, ButtonVariantsProps } from "./button.variants";

interface ButtonProps extends TouchableOpacityProps, ButtonVariantsProps {
    leftIcon?: keyof typeof Ionicons.glyphMap;
}

export function Button({ leftIcon, ...props }: ButtonProps) { 
    const styles = buttonVariants()
   return (
    <TouchableOpacity className={styles.base()} {...props}>
        <Text>Button</Text>
    </TouchableOpacity>
   ) 
}