import React from 'react';
import './content-suggestion.css';

const ContentSuggestion = ({children}) => {
  return (
    <div className="content-suggestion">
      <h2>Add content to your page</h2>
      <div className="content-suggestion__list">{children}</div>
    </div>
  );
};

const ContentSuggestionItem = ({children}) => {
  return <div className="content-suggestion__item">{children}</div>;
};

ContentSuggestion.Item = ContentSuggestionItem;

export default ContentSuggestion;
