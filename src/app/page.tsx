import React from "react";
import { Product, StrapiResponse, TCategory } from "./types/types";
import { useFetch } from "./SSRHooks/useFetch";

import Catalog from "./components/Catalog/Catalog";

export default async function Home() {
  const { data: products }: StrapiResponse<Product> = await useFetch(
    `products?populate=*`
  );
  const { data: categories }: StrapiResponse<TCategory> = await useFetch(
    "categories?populate[0]=subcategories"
  );
  return <Catalog products={products} categories={categories} />;
}
