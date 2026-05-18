import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { inputVariants, InputVariantsProps } from "./input.variants";
import { Ionicons } from "@expo/vector-icons";
import { useAppInputViewModel } from "./useAppInputViewModel";

export interface InputProps extends TextInputProps, InputVariantsProps {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
  error?: string;
  isDisabled?: boolean;
  isError?: boolean;
}

export function Input({
  label,
  leftIcon,
  containerClassName,
  className,
  mask,
  value,
  isError,
  secureTextEntry = false,
  onFocus,
  onBlur,
  onChangeText,
  error,
  isDisabled,
  ...props
}: InputProps) {
  const {
    getIconColor,
    handlePasswordToggle,
    handleWrapperFocus,
    handleFocus,
    handleBlur,
    handleTextChange,
    isFocused,
  } = useAppInputViewModel({
    value,
    isError: !!error,
    secureTextEntry,
    onFocus,
    onBlur,
    onChangeText,
    error,
    mask,
    isDisabled,
  });
  const styles = inputVariants({
    isFocused,
  });
  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        {leftIcon && (
          <Ionicons color={getIconColor()} className='mr-3' name={leftIcon} size={22}  />
        )}
        <TextInput
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleTextChange}
          className={styles.input({ className: className })}
          {...props}
        />
        <TouchableOpacity>
          <Ionicons name="eye-off-outline" size={22} color="gray" />
        </TouchableOpacity>
      </Pressable>
      {error && (
        <Text className={styles.error()}>
          <Ionicons className='ml-2' name="alert-circle-outline" size={22} color="danger" />
          {error}
        </Text>
      )}
    </View>
  );
}
