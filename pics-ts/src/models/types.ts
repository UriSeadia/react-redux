export type TPictureDataResult = {
  alt_description: string;
  blur_hash: string;
  categories: any[];
  color: string;
  created_at: string;
  current_user_collections: any[];
  description: string;
  height: number;
  id: string;
  liked_by_user:boolean;
  likes: number;
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  promoted_at: string;
  sponsorship: unknown;
  tags: {
    source: Record<string,unknown>;
    title: string;
    type: string;
  }[];
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: Record<string, unknown>;
  width: number;

};

export type TPictureData = {
  results: TPictureDataResult[];
  total: number;
  total_pages: number;
};

export type TPictureResponse = {
  config: Record<string, unknown>;
  data: TPictureData;
  headers: Record<string, unknown>;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
};