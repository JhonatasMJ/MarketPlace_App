import { CartProduct, OmitedProductCart } from "../store/cart-store";

export const cartService = {
  findExistingProduct: (productList: CartProduct[], productId: number) => {
    return productList.some(({ id }) => id === productId);
  },
  addProductToCart: (
    productList: CartProduct[],
    newProduct: OmitedProductCart,
  ) => {
    const existingProduct = cartService.findExistingProduct(
      productList,
      newProduct.id,
    );

    // Se o produto já existe, atualiza a quantidade
    if (existingProduct) {
      return productList.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    }
    // Se o produto não existe, adiciona ao carrinho
    return [...productList, { ...newProduct, quantity: 1 }];
  },

  // Calcula o total do carrinho, somando o preço de cada produto multiplicado pela quantidade, o acc é o acumulador e o product é o produto atual, ex: 1 produto de R$ 10,00 e 2 quantidades, total = R$ 20,00
  calculateTotal: (productList: CartProduct[]) => {
    return productList.reduce(
      (acc, product) => acc + Number(product.price) * product.quantity,
      0,
    );
  },
};
