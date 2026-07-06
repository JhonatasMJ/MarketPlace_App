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
  labelClassName?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
  error?: string;
  isDisabled?: boolean;
  isError?: boolean;
}

export function Input({
  label,
  labelClassName,
  leftIcon,
  containerClassName,
  className,
  mask,
  value,
  isError,
  secureTextEntry = false,
  multiline,
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
    handleFocus,
    handleBlur,
    handleTextChange,
    showPassword,
    isFocused,
  } = useAppInputViewModel({
    value,
    isError: !!error,
    secureTextEntry,
    onFocus,
    onBlur,
    onChangeText,
    mask,
    isDisabled,
  });
  const styles = inputVariants({
    isFocused,
    isError: !!error,
    isDisabled,
  });
  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label({ className: labelClassName })}>{label}</Text>
      <Pressable
        className={styles.wrapper({
          className: multiline ? "items-start" : undefined,
        })}
      >
        {leftIcon && (
          <Ionicons color={getIconColor()} className='mr-3' name={leftIcon} size={22}  />
        )}
        <TextInput
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleTextChange}
          secureTextEntry={showPassword}
          multiline={multiline}
          textAlignVertical={multiline ? "top" : "center"}
          className={styles.input({ className: className })}
          {...props}
        />
        {secureTextEntry && (
        <TouchableOpacity onPress={handlePasswordToggle}>
          <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={22} color="gray" />
        </TouchableOpacity>
        )}
      </Pressable>
      {error && (
        <Text className={styles.error()}>
          {error}
        </Text>
      )}
    </View>
  );
}
