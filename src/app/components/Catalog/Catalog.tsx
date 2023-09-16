import { useFetch } from "@/app/SSRHooks/useFetch";
import { Product, StrapiResponse, TCategory } from "@/app/types/types";
import React from "react";
import Items from "./Items";

function Filter({ categories }: { categories: TCategory[] }) {
  return (
    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
      {categories.map((category) => (
        <li>
          <a href={`/category/${category.id}`} className="block px-2 py-3">
            {category.attributes.title}
          </a>
          <ul>
            {category.attributes.subcategories.data.map((subcat) => (
              <li>
                <a href={`/category/${category.id}/${subcat.id}`}>
                  {subcat.attributes.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default async function Catalog({ products }: { products: Product[] }) {
  const { data: categories }: StrapiResponse<TCategory> = await useFetch(
    "categories?populate[0]=subcategories"
  );
  return (
    <div className="bg-white">
      <div>
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>

          <div className="fixed inset-0 z-40 flex">
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <Filter categories={categories} />
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center"></div>
          </div>
          <div className="flex">
            <section
              aria-labelledby="products-heading"
              className="pb-24 pt-6 hidden lg:block"
            >
              <Filter categories={categories} />
            </section>
            <section className="pb-24 pt-6 w-full">
              <Items products={products} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
