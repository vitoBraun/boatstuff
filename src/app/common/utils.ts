export function makeImageUrl(imgUrl: string) {
  return `${process.env.STRAPI_URL || "http://localhost:1337"}${imgUrl}`;
}

export function toPrice(price: number) {
  return price.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
}

export function getFiltersString(params: { slug: string[] }) {
  if (params.slug[1]) {
    return `products?populate=*&filters[categories][id][$eq]=${params.slug[0]}&filters[subcategories][id][$eq]=${params.slug[1]}`;
  }
  return `products?populate=*&filters[categories][id][$eq]=${params.slug[0]}`;
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
