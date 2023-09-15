import { Product, StrapiResponse } from "@/app/types/types";
import React from "react";
import Image from "next/image";
import { makeImageUrl } from "@/app/common/utils";
export default function Catalog({ products }: { products: Product[] }) {
  return (
    <div className="bw-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a href={`/product/${product.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={makeImageUrl(
                    product.attributes.image!.data[0].attributes.formats.medium
                      .url
                  )}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="w-full object-cover object-center group-hover:opacity-75 max-h-100"
                  width={
                    product.attributes.image?.data[0].attributes.formats.medium
                      .width
                  }
                  height={
                    product.attributes.image?.data[0].attributes.formats.medium
                      .height
                  }
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                {product.attributes.title}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.attributes.price?.toLocaleString("th-TH", {
                  style: "currency",
                  currency: "THB",
                })}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
