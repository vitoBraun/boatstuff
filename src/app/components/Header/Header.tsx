import React from "react";
import { useFetch } from "../../SSRHooks/useFetch";
import Link from "next/link";
import Image from "next/image";
import { TCategory, StrapiResponse } from "@/app/types/types";
import { DropdownMenu } from "./DropdownMenu";

export default async function Header() {
  const { data: categories }: StrapiResponse<TCategory> = await useFetch(
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
          <DropdownMenu title={"Info"}>
            <ul>
              <li>Hey</li>
            </ul>
          </DropdownMenu>

          <span>
            <a href="tel:89637657788">8-963-765-77-88</a>
          </span>
        </div>
      </nav>
    </header>
  );
}
