import { FC } from "react"
import { Text, View } from "react-native"
import { useFilterViewModel } from "./useFilter.viewModel"

export const FilterView: FC<ReturnType<typeof useFilterViewModel>> = ({
    filter
}) => {
    
    return (
        <View>
            <Text>Filter</Text>
        </View>
    )
}