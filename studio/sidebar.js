import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title("Joey's Painting")
    .items([
      // Spread in our top level items:
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'generalPaintingPage'
      ),
      // Create new submenu item
      S.listItem()
        .title('General Painting Page')
        .icon(() => <strong>🎨</strong>)
        .child(
          S.editor()
            .schemaType('generalPaintingPage')
            // make a new document ID, so we don't have a random string of numbers
            .documentId('general-painting-page')
        ),
    ]);
}
