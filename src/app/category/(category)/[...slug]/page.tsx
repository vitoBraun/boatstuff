import { useFetch } from "@/app/SSRHooks/useFetch";
import { getFiltersString } from "@/app/common/utils";

import Catalog from "@/app/components/Catalog/Catalog";
import { Product, StrapiResponse } from "@/app/types/types";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { data: products }: StrapiResponse<Product> = await useFetch(
    getFiltersString(params)
  );
  return (
    <>
      <Catalog products={products} />
    </>
  );
}
