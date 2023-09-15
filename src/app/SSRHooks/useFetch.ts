export const useFetch = (route: string) => {
  const res = fetch(`${process.env.STRAPI_API_URL}/${route}`, {
    headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` },
  }).then((data) => data.json());

  return res;
};
