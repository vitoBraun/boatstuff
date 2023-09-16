"use client";
import { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

export function DropdownMenu({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    targetComponentRef: componentRef,
    callBackFn: setIsCatOpen,
  });
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
        <div className="absolute left-1/2 z-10 mt-5 flex max-w-max -translate-x-1/2 px-4">
          <div className="max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
