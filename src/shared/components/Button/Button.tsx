import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { buttonVariants, ButtonVariantsProps } from "./button.variants";
import { colors } from "../../../styles/colors";

interface ButtonProps extends TouchableOpacityProps, ButtonVariantsProps {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  children: string;
}



export function Button({
  leftIcon,
  rightIcon,
  children,
  variant = "field",
  hasIcon,
  isLoading,
  isDisabled,
  ...props
}: ButtonProps) {
  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    isLoading,
    isDisabled,
    variant,
  });

  const contentColor = variant === "field" ? colors.white : colors["purple-base"]

  const renderContent = () => {
    if (isLoading) { 
        return <ActivityIndicator size="small" color={variant=== "field" ? colors.white : colors["purple-base"]}/>
    }

    return (
        <>
        {leftIcon && <Ionicons name={leftIcon} size={20} color={contentColor}/>}
        <Text className={styles.text()}>{children}</Text>
        {rightIcon && <Ionicons name={rightIcon} size={20} color={contentColor}/>}
        </>
    )
  }
  return (
    <TouchableOpacity className={styles.base()} {...props}>
      {renderContent()}
    </TouchableOpacity>
  );
}
