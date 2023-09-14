export type CategoryData = {
  data: Array<{
    id: number;
    attributes: {
      title: string;
      description: string;
    };
  }>;
};
