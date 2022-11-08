import { useMemo } from "react";
import { Product } from "../interface/interfaces";

export default function useGeneratorCategory(products: Product[]) {
  return useMemo(() => {
    let categories: string[] = [];

    if (products.length) {
      products.forEach((product) => {
        if (!categories.includes(product.category)) {
          categories.push(product.category);
        }
      });
    }

    return categories;
  }, [products]);
}
