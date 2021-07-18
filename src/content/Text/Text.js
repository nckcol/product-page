import React, {useCallback} from 'react';
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
  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);

  return <textarea className="text-edit" value={data?.text || ''} onChange={handleChange} />;
};

const Text = ({data}) => {
  return <p>{data.text}</p>;
};

export default Text;
