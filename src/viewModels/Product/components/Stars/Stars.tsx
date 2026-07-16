import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../../styles/colors";

interface StarsParams {
  rating: number;
  handleChangeRating: (rating: number) => void;
}

export const Stars = ({ rating, handleChangeRating }: StarsParams) => {
  return Array.from({ length: 5 }, (_, index) => {
    const startNumber = index + 1;
    const isSelected = startNumber <= rating;
    return (
      <TouchableOpacity key={`rating-star-${startNumber}`} onPress={() => handleChangeRating(startNumber)}>
        <Ionicons
          name={isSelected ? "star" : "star-outline"}
          size={32}
          color={isSelected ? colors["purple-base"] : colors.gray[200]}
        />
      </TouchableOpacity>
    );
  });
};
