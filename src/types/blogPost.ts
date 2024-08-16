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
  image: string;
}
