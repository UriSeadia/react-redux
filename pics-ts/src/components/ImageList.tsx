import React, { FC } from 'react';
import '../style/ImageList.css';
import { TPictureDataResult } from '../models/types';
import ImageCard from './ImageCard';

const ImageList: FC<{ images: TPictureDataResult[] }> = ({ images }): JSX.Element => {
  const pictures = images.map(image => <ImageCard key={image.id} image={image} />);

  return (
    <div className="image-list">{pictures}</div>
  );
};

export default ImageList;
