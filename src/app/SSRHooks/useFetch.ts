export const useFetch = (route: string) => {
  const url = `${process.env.NEXT_PRIVATE_BACKEND_URL}/${route}`;
  const res = fetch(url, { cache: "no-store" }).then((data) => data.json());

  return res;
};
