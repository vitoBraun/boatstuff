import { Product } from "@/app/types/types";
import React from "react";

import Item from "./Item";
export default function Items({ products }: { products: Product[] }) {
  if (!products.length) {
    return <div>NO ITEMS TO DISPLAY</div>;
  }
  return (
    <div className="grid lg:grid-cols-3 gap-x-5 gap-y-10 md:grid-cols-2 sm:grid-cols-1">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </div>
  );
}
