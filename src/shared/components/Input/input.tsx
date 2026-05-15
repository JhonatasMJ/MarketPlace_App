import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import { inputVariants, InputVariantsProps } from "./input.variants"
import {Ionicons} from '@expo/vector-icons'

export interface InputProps extends TextInputProps,InputVariantsProps{
    label?: string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    containerClassName?: string;
    mask?: (value: string) => void | string;
}

export function Input({label, leftIcon, containerClassName,className, mask, ...props}: InputProps) { 
    const styles = inputVariants({
    
    })
    return (
        <View className={styles.container({className: containerClassName})}>
            <Text className={styles.label()}>Label</Text>
            <Pressable className={styles.wrapper()}>
                <Ionicons name="person" size={22} color="gray" />
                <TextInput className={styles.input({className: className})} {...props}/>
                <TouchableOpacity>
                    <Ionicons name="eye-off-outline" size={22} color="gray" />
                </TouchableOpacity>
            </Pressable>
        </View>
    )
}