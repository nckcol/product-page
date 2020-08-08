import React from 'react';
import './media-gallery.css';
import GalleryPicture from './GalleryPicture';

export const MediaGalleryAddButton = (props) => {
  return (
    <button className="media-gallery-add-button" {...props}>
      <div className="media-gallery-add-button__picture">
        <GalleryPicture />
      </div>
      <div className="media-gallery-add-button__label">Photo gallery</div>
    </button>
  );
};

const MediaGallery = ({data}) => {
  return (
    <div>
      {data.title && <h3>{data.title}</h3>}
      <picture>
        <source />
        <img src={data.src} alt="" />
      </picture>
    </div>
  );
};

export default MediaGallery;
