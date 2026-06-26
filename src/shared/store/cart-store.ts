import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { cartService } from "../services/cart.service";

export interface CartProduct {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image?: string;
}

export type OmitedProductCart = Omit<CartProduct, "quantity">;

interface CartStore {
  products: CartProduct[];
  total: number;
  addProduct: (product: OmitedProductCart) => void;
  removeProduct: (productId: number) => void;
  updateQuantity: (params: { productId: number; quantity: number }) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      products: [],
      total: 0,
      // Adiciona um produto ao carrinho
      addProduct: (newProduct) =>
        set((state) =>
          cartService.addProductToCart(state.products, newProduct),
        ),
      clearCart: () => set({ products: [], total: 0 }),
      getItemCount: () => 0,
      removeProduct: (productId: number) =>
        set((state) => {
          return cartService.removeProductFromList(state.products, productId);
        }),
      updateQuantity: () => set({}),
    }),
    {
      name: "marketplace-cart",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
