import React from 'react';
import GalleryPicture from '../icons/GalleryPicture';
import './text.css';

export const TextAddButton = (props) => {
  return (
    <button className="media-gallery-add-button" {...props}>
      <div className="media-gallery-add-button__picture">
        <GalleryPicture />
      </div>
      <div className="media-gallery-add-button__label">Photo gallery</div>
    </button>
  );
};

export const TextEdit = ({data, onChange}) => {
  return (
    <textarea
      value={(data && data.text) || ''}
      onChange={(event) => {
        onChange({text: event.target.value});
      }}
    />
  );
};

const Text = ({data}) => {
  return <p>{data.text}</p>;
};

export default Text;
