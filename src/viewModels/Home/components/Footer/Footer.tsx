import { ActivityIndicator, View } from "react-native"
import { colors } from "../../../../styles/colors";

interface FooterParams {
    isLoading: boolean;
}

export const Footer = ({ isLoading }: FooterParams) => {

    if (!isLoading) {
        return null;
    }

    return (
        <View>
          <ActivityIndicator size="small" color={colors["purple-base"]} />
        </View>
    )
}