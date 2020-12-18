export interface FlickrPhotoDataResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: string;
    photo: FlickrPhoto[];
  };
}

export interface FlickrPhoto {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  originalsecret: string;
  originalformat: string;
}
