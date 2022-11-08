import { useMemo } from "react";
import { Product } from "../interface/interfaces";

export default function useFilter(
  products: Product[],
  search: string,
  sort: string,
  selectedCategories: string[]
) {
  const filteredProducts = useMemo(() => {
    let productsCopy = [...products];

    if (sort === "Price") {
      productsCopy.sort((a, b) => b.price - a.price);
    } else if (sort === "Title") {
      productsCopy.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
    }

    if (selectedCategories.length) {
      productsCopy = productsCopy.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    return productsCopy.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search, sort, selectedCategories]);
  return filteredProducts;
}
