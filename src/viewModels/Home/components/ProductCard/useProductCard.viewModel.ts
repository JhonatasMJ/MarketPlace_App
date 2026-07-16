import { ProductInterface } from "../../../../shared/interfaces/product";

interface UseProductCardViewModelParams {
  product: ProductInterface;
}


export const useProductCardViewModel = ({
  product,
}: UseProductCardViewModelParams) => {


    const formatProductName = (name: string) => {
        if(name.length > 17) {
            return `${name.slice(0, 17)}...`;
        }
        return name;
    }
    
    /* Formata a avaliação do produto para 2 casas decimais e substitui o ponto por vírgula */
    const formatRating  = product.ratingCount.toFixed(1).replace(".", ".");
    const displayName = formatProductName(product.name);

  return {
    product,
    displayName,
    formatRating,
  };
};
