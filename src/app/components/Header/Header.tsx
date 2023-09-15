import React from "react";
import { useFetch } from "../../SSRHooks/useFetch";
import Link from "next/link";
import Image from "next/image";
import { TCategory, StrapiApiResponse } from "@/app/types/types";
import { Category } from "./Category";

export default async function Header() {
  const { data: categories }: StrapiApiResponse<TCategory> = await useFetch(
    "categories?populate[0]=subcategories"
  );

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image
              className="h-8 w-auto"
              src="/images/logo2.png"
              alt="Logo"
              width={300}
              height={200}
            />
          </Link>
        </div>

        <div className="lg:flex lg:gap-x-12">
          {categories.map((category) => (
            <Category
              title={category.attributes.title}
              id={category.id}
              subcategories={category.attributes.subcategories.data}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}
