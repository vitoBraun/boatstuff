export const useFetch = (route: string) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${route}`;
  console.log(url);
  const res = fetch(url).then((data) => data.json());

  return res;
};
