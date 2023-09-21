import React from "react";
import { Product, TCategory } from "./types/types";
import { useFetch } from "./SSRHooks/useFetch";

import Catalog from "./components/Catalog/Catalog";

export default async function Home() {
  const products: Product[] = await useFetch(
    "product/list"
  );
  const categories: TCategory[] = await useFetch(
    "category/list"
  );

  return <Catalog products={products} categories={categories} />;
}
