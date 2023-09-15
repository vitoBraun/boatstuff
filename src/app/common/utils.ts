export function makeImageUrl(imgUrl: string) {
  return `${process.env.STRAPI_URL}${imgUrl}`;
}
