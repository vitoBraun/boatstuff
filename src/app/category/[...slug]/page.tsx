import { useFetch } from "@/app/SSRHooks/useFetch";
import { getFiltersString } from "@/app/common/utils";

import Catalog from "@/app/components/Catalog/Catalog";
import { Product, TCategory } from "@/app/types/types";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const products: Product[] = await useFetch(
    getFiltersString(params)
  );
  const categories: TCategory[] = await useFetch(
    "category/list"
  );
  return (
    <>
      <Catalog products={products} categories={categories} />
    </>
  );
}
