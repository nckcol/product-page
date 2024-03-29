import React, {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import MediaGallery, {MediaGalleryAddButton} from './content/MediaGallery';
import ContentSuggestion from './ContentSuggestion';
import Text, {TextAddButton, TextEdit} from './content/Text';

const CONTENT_TYPE = {
  TEXT: 'CONTENT_TYPE/TEXT',
  MEDIA_GALLERY: 'CONTENT_TYPE/MEDIA_GALLERY',
};

function Content({children}) {
  return <div calssName="content">{children}</div>;
}

function ContentItem({data, edit, component: Display, editComponent: Edit, onEdit, onSave}) {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (edit) {
      setState(data);
    }
  }, [edit]);

  console.log(data, state);

  return (
    <div calssName="content-item">
      {!edit && (
        <div calssName="content-item__edit">
          <button onClick={onEdit}>edit</button>
        </div>
      )}
      {edit ? (
        <Edit
          data={state}
          onChange={(data) => {
            setState(data);
          }}
        />
      ) : (
        <Display data={data} />
      )}
      {edit && (
        <div calssName="content-item__submit">
          <button onClick={() => onSave(state)}>save</button>
        </div>
      )}
    </div>
  );
}

function App() {
  const [content, setContent] = useState([
    {
      id: 1,
      type: CONTENT_TYPE.TEXT,
      data: {
        text: 'фото футболки 📷',
      },
    },
    {
      id: 2,
      type: CONTENT_TYPE.TEXT,
      edit: true,
      data: {
        text: 'фото футболки 📷',
      },
    },
    {
      id: 3,
      type: CONTENT_TYPE.MEDIA_GALLERY,
      data: {
        title: 'фото футболки 📷',
        src: 'https://picsum.photos/200/300',
      },
    },
  ]);

  const add = (type, data) => {
    setContent((content) =>
      content.concat({
        id: nanoid(),
        type,
        edit: true,
        data,
      })
    );
  };

  const edit = (id) => {
    setContent((content) => content.map((item) => (item.id === id ? {...item, edit: true} : item)));
  };

  const save = (id, data) => {
    setContent((content) => content.map((item) => (item.id === id ? {...item, edit: false, data} : item)));
  };

  return (
    <div>
      <h1>Enter product name here</h1>
      <Content>
        {content.map((item) => {
          if (item.type === CONTENT_TYPE.TEXT) {
            return (
              <ContentItem
                data={item.data}
                edit={item.edit}
                onEdit={() => {
                  edit(item.id);
                }}
                onSave={(data) => {
                  save(item.id, data);
                }}
                component={Text}
                editComponent={TextEdit}
              />
            );
          }

          if (item.type === CONTENT_TYPE.MEDIA_GALLERY) {
            return <MediaGallery key={item.id} data={item.data} />;
          }

          return null;
        })}
      </Content>
      <ContentSuggestion>
        <ContentSuggestion.Item>
          <TextAddButton
            onClick={() => {
              add(CONTENT_TYPE.TEXT);
            }}
          />
        </ContentSuggestion.Item>
        {/* <ContentSuggestion.Item>
          <MediaGalleryAddButton onAdd={handleContentAdd} />
        </ContentSuggestion.Item> */}
      </ContentSuggestion>
    </div>
  );
}

export default App;
