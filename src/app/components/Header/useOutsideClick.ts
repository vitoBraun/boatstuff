import { assertIsNode } from "@/app/common/utils";
import React, { RefObject, useEffect } from "react";

export default function useOutsideClick({
  targetComponentRef,
  setVisibleCB,
}: {
  targetComponentRef: RefObject<HTMLDivElement>;
  setVisibleCB: (prop: boolean) => void;
}) {
  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      assertIsNode(target);
      if (
        targetComponentRef.current &&
        !targetComponentRef.current.contains(target)
      ) {
        setVisibleCB(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return;
}
