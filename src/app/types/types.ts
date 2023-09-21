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
  title: string;
  description: string;
  shortDescription: string;
  isAvailable: boolean;
  isNew: boolean;
  type: string;
  categories?: { data: TCategory[] };
  subcategories?: { data: SubCategory[] };
  price?: number;
  images?: string;
};

export interface StrapiResponse<T> {
  data: T[];
}

export type SubCategory = {
  id: number;
  title: string;
  description: string;
};

export type TCategory = {
  id: number;
  title: string;
  description: string;
  subcategories: SubCategory[];
};
