import React from "react";
import Image from "next/image";
import { makeImageUrl, toPrice } from "@/app/common/utils";
import { Product, StrapiResponse } from "@/app/types/types";
import { useFetch } from "@/app/SSRHooks/useFetch";
export default async function Page({ params }: { params: { id: string } }) {
  function getFiltersString(params: { id: string }) {
    return `products?populate=*&filters[id][$eq]=${params.id}`;
  }

  const { data }: StrapiResponse<Product> = await useFetch(
    getFiltersString(params)
  );
  const product = data[0];
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <Image
                src={makeImageUrl(
                  product.attributes.image!.data[0].attributes.formats.medium
                    .url
                )}
                alt={product.attributes.title}
                className="w-full h-full object-cover"
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
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">
              {product.attributes.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              {product.attributes.shortDescription}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price:</span>
                <span className="text-gray-600">
                  {toPrice(product.attributes.price ?? 0)}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Availability:</span>
                <span className="text-gray-600">
                  {" "}
                  {product.attributes.isAvailable ? "InStock" : "Out of stock"}
                </span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700">
                Product Description:
              </span>
              <p className="text-gray-600 text-sm mt-2">
                {product.attributes.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
