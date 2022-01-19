import React from 'react';
import PhotoItem from './PhotoItem';

const PhotoList = ({ photos }) => {
  return photos.map((photo) => <PhotoItem photo={photo} />);
};

export default PhotoList;
