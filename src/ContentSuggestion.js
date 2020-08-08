import React from 'react';
import {MediaGalleryAddButton} from './content/MediaGallery';
import './content-suggestion.css';

const ContentSuggestion = () => {
  return (
    <div className="content-suggestion">
      <h2>Add content to your page</h2>
      <div className="content-suggestion__list">
        <div className="content-suggestion__item">
          <MediaGalleryAddButton />
        </div>
        <div className="content-suggestion__item">
          <MediaGalleryAddButton />
        </div>
        <div className="content-suggestion__item">
          <MediaGalleryAddButton />
        </div>
      </div>
    </div>
  );
};

export default ContentSuggestion;
