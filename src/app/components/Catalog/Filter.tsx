import { scrollToFn } from "@/app/common/utils";
import { TCategory } from "@/app/types/types";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Filter({ categories }: { categories: TCategory[] }) {
  const { slug } = useParams();

  const router = useRouter();
  return (
    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
      {categories.map((category) => (
        <li key={category.id}>
          <button
            onClick={() => {
              scrollToFn(0, () => router.push(`/category/${category.id}`));
            }}
            className={`block px-2 py-3 ${
              slug && category.id === Number(slug[0]) && "font-bold"
            }`}
          >
            {category.attributes.title}
          </button>
          <ul className="pl-4 text-sm">
            {category.attributes.subcategories.data.map((subcat) => (
              <li key={subcat.id}>
                <button
                  onClick={() => {
                    scrollToFn(0, () =>
                      router.push(`/category/${category.id}/${subcat.id}`)
                    );
                  }}
                  className={`block px-2 py-3 ${
                    slug && subcat.id === Number(slug[1]) && "font-bold"
                  }`}
                >
                  {subcat.attributes.title}
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
