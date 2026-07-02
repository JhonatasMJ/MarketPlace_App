import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../styles/colors";

interface StarsParams {
  rating: number;
}

export const Stars = ({ rating }: StarsParams) => {
  return Array.from({ length: 5 }, (_, index) => {
    const startNumber = index + 1;
    const isSelected = startNumber <= rating;
    return (
      <TouchableOpacity>
        <Ionicons
          name={isSelected ? "star" : "star-outline"}
          size={32}
          color={isSelected ? colors["purple-base"] : colors.gray[200]}
        />
      </TouchableOpacity>
    );
  });
};
