export function convertStringToArray(string: string): string[] {
  if (string === "") {
    return []; // Return an empty array
  }
  return string?.split(",");
}

export function makeImageUrl(imgUrlsString: string | undefined) {
  const url = convertStringToArray(imgUrlsString || "")[0];
  return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
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
