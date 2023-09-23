export function convertStringToArray(string: string): string[] {
  if (string === "") {
    return [];
  }
  return string?.split(",");
}

export function makeImageUrlArray(imgUrlsString: string): string[] {
  const urlsArray = convertStringToArray(imgUrlsString || "");
  return urlsArray.map(
    (url) =>
      `${
        process.env.NODE_ENV === "production"
          ? process.env.NEXT_PUBLIC_BACKEND_URL
          : process.env.NEXT_LOCALHOST_BACKEND_URL
      }${url}`
  );
}

export function toPrice(price: number) {
  return price.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
}

export function getFiltersString(params: { slug: string[] }) {
  const url = "product/list?";
  const categorySlug = `categoryId=${params.slug[0]}`;
  const subcategorySlug = `subcategoryId=${params.slug[1]}`;

  if (params.slug[1]) {
    return `${url}${categorySlug}&${subcategorySlug}`;
  }
  return `${url}${categorySlug}`;
}

export function scrollToFn(offset: number, callback: () => void) {
  const fixedOffset = offset.toFixed();
  const onScroll = function () {
    if (window.pageYOffset.toFixed() === fixedOffset) {
      window.removeEventListener("scroll", onScroll);
      callback();
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

export function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}
