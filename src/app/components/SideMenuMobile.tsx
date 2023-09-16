import React, { useState } from "react";
import { Filter } from "./Catalog/Filter";
import { TCategory } from "../types/types";
import RouterButton from "./RouterButton";

export default function SideMenuMobile({
  categories,
}: {
  categories: TCategory[];
}) {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const conditionedStyle = `relative z-40 lg:hidden transition-2 duration-300 ease-in-out ${
    !isMenuVisible && "opacity-0"
  }`;
  return (
    <>
      <div className={`fixed top-0 right-0 mr-5 mt-5 z-50 lg:hidden`}>
        <button
          onClick={() => {
            setIsMenuVisible((prev) => !prev);
          }}
          type="button"
          className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer`}
        >
          <div
            className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
              isMenuVisible ? "rotate-45" : "rotate-0"
            }`}
          />
          <div
            className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
              isMenuVisible
                ? "translate-x-full bg-transparent"
                : "translate-x-0"
            }`}
          />
          <div
            className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
              isMenuVisible ? "rotate-[-45deg]" : "rotate-0"
            }`}
          />
        </button>
      </div>

      <div className={conditionedStyle} aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>

        <div className="fixed inset-0 z-40 flex">
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">
                <RouterButton path="/" title="Catalogue" />
              </h2>
            </div>
            <Filter categories={categories} />
          </div>
        </div>
      </div>
    </>
  );
}
