import React from "react";
import { scrollToFn } from "../common/utils";
import { useRouter } from "next/navigation";

export default function RouterButton({
  title,
  path,
  className,
}: {
  title: string;
  path: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        scrollToFn(0, () => router.push(path ?? "/"));
      }}
      className={className}
    >
      {title}
    </button>
  );
}
