export function makeImageUrl(imgUrl: string) {
  return `${process.env.STRAPI_URL}${imgUrl}`;
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
