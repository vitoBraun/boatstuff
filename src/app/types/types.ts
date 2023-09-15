enum ImageFormats {
  thumbnail,
  medium,
  small,
  large,
}

export type Image = {
  id: number;
  attributes: {
    width: number;
    height: number;
    formats: {
      [key in keyof typeof ImageFormats]: {
        width: number;
        height: number;
        url: string;
      };
    };
  };
};

export type Product = {
  id: number;
  attributes: {
    title: string;
    description: string;
    isNew: boolean;
    type: string;
    categories?: { data: TCategory[] };
    subcategories?: { data: SubCategory[] };
    price?: number;
    image?: { data: Image[] };
  };
};

export interface StrapiApiResponse<T> {
  data: T[];
}

export type SubCategory = {
  id: number;
  attributes: { title: string; description: string };
};

export type TCategory = {
  id: number;
  attributes: {
    title: string;
    description: string;
    subcategories: { data: SubCategory[] };
  };
};
