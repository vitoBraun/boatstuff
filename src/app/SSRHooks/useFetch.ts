export const useFetch = (route: string) => {
  const res = fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${route}`).then(
    (data) => data.json()
  );

  return res;
};
