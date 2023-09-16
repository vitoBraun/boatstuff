import { TCategory } from "@/app/types/types";
import { useParams } from "next/navigation";
import RouterButton from "../RouterButton";

export function Filter({ categories }: { categories: TCategory[] }) {
  const { slug } = useParams();

  return (
    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
      {categories.map((category) => (
        <li key={category.id}>
          <RouterButton
            path={`/category/${category.id}`}
            title={category.attributes.title}
            className={`block px-2 py-3 ${
              slug && category.id === Number(slug[0]) && "font-bold"
            }`}
          />

          <ul className="pl-4 text-sm">
            {category.attributes.subcategories.data.map((subcat) => (
              <li key={subcat.id}>
                <RouterButton
                  path={`/category/${category.id}/${subcat.id}`}
                  title={subcat.attributes.title}
                  className={`block px-2 py-3 ${
                    slug && subcat.id === Number(slug[1]) && "font-bold"
                  }`}
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
