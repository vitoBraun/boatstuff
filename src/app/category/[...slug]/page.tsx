import { useFetch } from "@/app/SSRHooks/useFetch";
import { getFiltersString } from "@/app/common/utils";

import Catalog from "@/app/components/Catalog/Catalog";
import { Product, StrapiResponse, TCategory } from "@/app/types/types";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { data: products }: StrapiResponse<Product> = await useFetch(
    getFiltersString(params)
  );
  const { data: categories }: StrapiResponse<TCategory> = await useFetch(
    "categories?populate[0]=subcategories"
  );
  return (
    <>
      <Catalog products={products} categories={categories} />
    </>
  );
}
