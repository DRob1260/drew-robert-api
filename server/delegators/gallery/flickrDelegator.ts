import axios, { AxiosResponse } from "axios";
import { Urls, Secrets } from "../../config";
import { FlickrPhotoDataResponse } from "../../models/gallery/flickr/FlickrPhotoDataResponse";

export const getUserPhotoData = (
  userId: string
): Promise<FlickrPhotoDataResponse> => {
  return axios
    .get(`${Urls.flickrApi}/`, {
      params: {
        method: "flickr.people.getPhotos",
        api_key: Secrets.flickr.apiKey,
        user_id: userId,
        format: "json",
        nojsoncallback: 1,
        extras: "original_format",
      },
    })
    .then((response: AxiosResponse<FlickrPhotoDataResponse>) => {
      return response.data;
    });
};
