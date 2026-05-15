import { Pressable, TextInput, TouchableOpacity, View } from "react-native"
import { inputVariants } from "./input.variants"
import {Ionicons} from '@expo/vector-icons'

export function Input() { 
    const styles = inputVariants({
    
    })
    return (
        <View>
            <Pressable>
                <Ionicons name="eye-outline" size={24} color="gray" />
                <TextInput/>
                <TouchableOpacity>
                    <Ionicons name="eye-off-outline" size={24} color="gray" />
                </TouchableOpacity>
            </Pressable>
        </View>
    )
}