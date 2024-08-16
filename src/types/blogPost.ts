export interface BlogPost {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: Data;
}

export interface Data {
  title: string;
  tags: string[];
  cover: {
    src: string;
    width: number;

    height: number;

    format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
  };
  date?: string;
}
