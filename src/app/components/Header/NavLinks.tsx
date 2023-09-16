import Link from "next/link";
import React from "react";

export default function NavLinks({ className }: { className?: string }) {
  const information = [
    { name: "Contacts", href: "/contacts" },
    { name: "Other Info", href: "/info" },
  ];
  return (
    <div className={`${className ? className : ""} lg:flex lg:gap-x-12`}>
      {information.map((info) => (
        <Link href={info.href}>{info.name}</Link>
      ))}

    </div>
  );
}
