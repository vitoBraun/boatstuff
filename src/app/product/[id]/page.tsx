import React from "react";

import { Product } from "@/app/types/types";
import { useFetch } from "@/app/SSRHooks/useFetch";
import Link from "next/link";
import ImageComp from "./image";
import { toPrice } from "@/app/common/utils";
export default async function Page({ params }: { params: { id: string } }) {
  const product: Product = await useFetch(
    `product/${params.id}`
  );

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">

            <ImageComp images={product.images ? product.images : ''} />

            <div className="flex justify-center -mx-2 mb-4">
              <Link
                href="https://wa.me/+66858504142"
                target="_blank"
                className="bg-gray-900 text-white py-2 px-10 rounded-full font-bold hover:bg-gray-500"
              >
                BUY
              </Link>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              {product.shortDescription}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price:</span>
                <span className="text-gray-600">
                  {toPrice(product.price ?? 0)}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Availability:</span>
                <span className="text-gray-600">
                  {" "}
                  {product.isAvailable ? "InStock" : "Out of stock"}
                </span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700">
                Product Description:
              </span>
              <p className="text-gray-600 text-sm mt-2 whitespace-pre-line">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
