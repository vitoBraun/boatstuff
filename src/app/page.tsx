import React from "react";
import { Product, StrapiResponse } from "./types/types";
import { useFetch } from "./SSRHooks/useFetch";
import Catalog from "./components/Catalog/Catalog";

export default async function Home() {
  const { data: products }: StrapiResponse<Product> = await useFetch(
    `products?populate=*`
  );
  return <Catalog products={products} />;
}
