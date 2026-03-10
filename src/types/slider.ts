export interface ImagesSrc {
  url: string;
  alt: string;
  style: string;
  description: string;
  category: "todos" | "frontend" | "backend" | "devops" | "linguagem";
}

export interface StateImage {
  initialState: ImagesSrc[];
  filtered: ImagesSrc[];
}