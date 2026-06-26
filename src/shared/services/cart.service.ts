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
      const products = productList.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

      const total = cartService.calculateTotal(products);

      return {
        products,
        total,
      };
    }

    const products = [...productList, { ...newProduct, quantity: 1 }];
    const total = cartService.calculateTotal(products);

    // Se o produto não existe, adiciona ao carrinho
    return {
      products,
      total,
    };
  },

  // Calcula o total do carrinho, somando o preço de cada produto multiplicado pela quantidade, o acc é o acumulador e o product é o produto atual, ex: 1 produto de R$ 10,00 e 2 quantidades, total = R$ 20,00
  calculateTotal: (productList: CartProduct[]) => {
    return productList.reduce(
      (acc, product) => acc + Number(product.price) * product.quantity,
      0,
    );
  },

  removeProductFromList: (productList: CartProduct[], productId: number) => {
    const products = productList.filter(({ id }) => id !== productId);
    const value = cartService.calculateTotal(products);
    return {
      products,
      value,
    };
  },

  // Atualiza a quantidade de um produto no carrinho
  updateProductQuantity: ({
    productId,
    quantity,
    productList,
  }: {
    productId: number;
    quantity: number;
    productList: CartProduct[];
  }) => {
    if (quantity <= 0) {
      return cartService.removeProductFromList(productList, productId);
    }
    const products = productList.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity };
      } else {
        return product;
      }
    });

    const total = cartService.calculateTotal(products);
    return {
      products,
      total,
    };
  },

  // Retorna a quantidade de itens no carrinho
  getItemCount: (productList: CartProduct[]) => {
    return productList.reduce((acc, product) => acc + product.quantity, 0);
  },
};
