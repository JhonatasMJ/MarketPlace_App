interface UsePriceTextViewModelParams {
  classNameCurrency?: string;
  classNameValue?: string;
  value: number;
}

export const usePriceTextViewModel = ({
  classNameCurrency,
  classNameValue,
  value,
}: UsePriceTextViewModelParams) => {
  const formatPrice = () => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(value));
  }

  /* Separa o símbolo da moeda e o valor */
  const formattedPrice = String(formatPrice());
  const parts = formattedPrice.split("\u00A0");
  const currencySymbol = parts[0];
  const valueText = parts.slice(1).join("\u00A0");

   return {
    classNameCurrency,
    classNameValue,
    formattedPrice,
    currencySymbol,
    valueText,
    value
  };
};
