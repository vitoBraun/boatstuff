import { assertIsNode } from "@/app/common/utils";
import React, { RefObject, useEffect } from "react";

export default function useOutsideClick({
  targetComponentRef,
  callBackFn,
}: {
  targetComponentRef: RefObject<HTMLDivElement>;
  callBackFn: (prop: boolean) => void;
}) {
  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      assertIsNode(target);
      if (
        targetComponentRef.current &&
        !targetComponentRef.current.contains(target)
      ) {
        callBackFn(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return;
}
