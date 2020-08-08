import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import MediaGallery from './content/MediaGallery';
import ContentSuggestion from './ContentSuggestion';

const CONTENT_TYPE = {
  MEDIA_GALLERY: 'CONTENT_TYPE/MEDIA_GALLERY',
};

function App() {
  const [content, setContent] = useState([
    {
      id: 1,
      type: CONTENT_TYPE.MEDIA_GALLERY,
      data: {
        title: 'фото футболки 📷',
        src: 'https://picsum.photos/200/300',
      },
    },
  ]);

  const handleContentAdd = (type, data) => {
    setContent(
      content.concat({
        id: nanoid(),
        type,
        data,
      })
    );
  };

  return (
    <div>
      <h1>Enter product name here</h1>
      {content.map(({type, id, data}) => {
        if (type === CONTENT_TYPE.MEDIA_GALLERY) {
          return <MediaGallery key={id} data={data} />;
        }

        return null;
      })}
      <ContentSuggestion onAdd={handleContentAdd} />
    </div>
  );
}

export default App;
