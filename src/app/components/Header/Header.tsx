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
              {information.map((info) => (
                <li>
                  <span>
                    <Link href={info.href}>{info.name}</Link>
                  </span>
                </li>
              ))}
            </ul>
          </DropdownMenu>

          <span>
            <Link href="tel:+66858504142">+66858504142</Link>
          </span>
        </div>
      </nav>
    </header>
  );
}
