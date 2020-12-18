import { getUserPhotoData } from "../../delegators/gallery/flickrDelegator";
import { FlickrPhoto } from "../../models/gallery/flickr/FlickrPhotoDataResponse";

export const retrieveUserPhotoUrls = (userId: string): Promise<string[]> => {
  return getUserPhotoData(userId).then((flickrPhotoDataResponse) => {
    return flickrPhotoDataResponse.photos.photo.map((flickrPhoto) => {
      return generatePhotoUrl(flickrPhoto);
    });
  });
};

const generatePhotoUrl = (flickrPhoto: FlickrPhoto) => {
  return `https://live.staticflickr.com/${flickrPhoto.server}/${flickrPhoto.id}_${flickrPhoto.originalsecret}_o.${flickrPhoto.originalformat}`;
};
