export const useFetch = (route: string) => {
  const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${route}`).then(
    (data) => data.json()
  );

  return res;
};
