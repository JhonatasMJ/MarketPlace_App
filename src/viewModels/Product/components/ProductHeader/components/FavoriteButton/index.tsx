import { FavoriteButtonView } from "./FavoriteButton.view";
import { useFavoriteButtonViewModel } from "./useFavoriteButton.viewModel";

interface FavoriteButtonProps {
  productId: number;
}

export const FavoriteButton = ({ productId }: FavoriteButtonProps) => {
  const viewModel = useFavoriteButtonViewModel(productId);

  return <FavoriteButtonView {...viewModel} />;
};
