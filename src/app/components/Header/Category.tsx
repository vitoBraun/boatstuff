"use client";

import { SubCategory } from "@/app/types/types";
import { useEffect, useRef, useState } from "react";

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

export function Category({
  title,
  id,
  subcategories,
}: {
  title: string;
  id: number;
  subcategories: SubCategory[];
}) {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      assertIsNode(target);
      if (componentRef.current && !componentRef.current.contains(target)) {
        setIsCatOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={componentRef}>
      <button
        type="button"
        className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        aria-expanded="false"
        onClick={() => {
          setIsCatOpen((prev) => !prev);
        }}
      >
        <span>{title}</span>
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isCatOpen && (
        <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {subcategories.map((sub_cat) => (
                <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div>
                    <a
                      href={`/subcategories/${sub_cat.id}`}
                      className="font-semibold text-gray-900"
                    >
                      {sub_cat.attributes.title}
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">
                      {sub_cat.attributes.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
