"use client";
import { Product, TCategory } from "@/app/types/types";
import React from "react";
import Items from "./Items";
import SideMenuDesktop from "../SideMenuDesktop";
import SideMenuMobile from "../SideMenuMobile";

export default function Catalog({
  products,
  categories,
}: {
  products: Product[];
  categories: TCategory[];
}) {
  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-y border-gray-200 pb-6 ">
            <SideMenuDesktop categories={categories} />
            <SideMenuMobile categories={categories} />
            <div className="flex w-full justify-center">
              <section className="pb-24 pt-6 flex  ">
                <div className="w-1/4 h-full hidden lg:block  "></div>
                <Items products={products} />
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
