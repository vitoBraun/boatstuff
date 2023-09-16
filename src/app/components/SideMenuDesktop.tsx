import React from "react";
import RouterButton from "./RouterButton";
import { Filter } from "./Catalog/Filter";
import { TCategory } from "../types/types";

export default function SideMenuDesktop({
  categories,
}: {
  categories: TCategory[];
}) {
  return (
    <section
      aria-labelledby="products-heading"
      className="pb-24 pt-6 hidden lg:block w-1/4 fixed left-1/8 top-100"
    >
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        <RouterButton path="/" title="Catalogue" />
      </h1>
      <Filter categories={categories} />
    </section>
  );
}
