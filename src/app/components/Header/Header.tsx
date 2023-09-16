import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu } from "./DropdownMenu";

export default async function Header() {
  const information = [
    { name: "Contacts", href: "/contacts" },
    { name: "Other Info", href: "/info" },
  ];
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center lg:px-8 p-8">
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image
              className="h-20 w-auto"
              src="/images/logo2.png"
              alt="Logo"
              width={300}
              height={200}
            />
          </Link>
        </div>

        <div className="lg:flex lg:gap-x-12 ">
          <DropdownMenu title={"Info"}>
            <ul>
              {information.map((info) => (
                <li>
                  <Link href={info.href}>{info.name}</Link>
                </li>
              ))}
            </ul>
          </DropdownMenu>

          <Link href="/someinf">Some info</Link>

          <Link href="tel:+66858504142" className="text-xl">
            +66858504142
          </Link>
        </div>
      </nav>
    </header>
  );
}
