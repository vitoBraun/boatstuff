export const useFetch = (route: string) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${route}`;
  const res = fetch(url, { cache: "no-cache" }).then((data) => data.json());

  return res;
};
