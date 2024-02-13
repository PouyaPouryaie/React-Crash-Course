/*
    Event Listener

*/
import React from 'react'
import ItemList from './ItemList';

const Content = ( {items, handleCheck, handleDelete} ) => {

  /* 
  1. in order to show the list value, we can use map function in JSX.
  2. each list item in react needs key. so we need to add key as attribute for list of items
      react needs keys, it helps react to which item is changed, which item is deleted, because react responses to change state
  3. we can use anonymouse function to call another function and send value to function eg:onChange={() => handleCheck(item.id)}
*/

  return (
    <main>
      {items.length ? (
          <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
        ) : (
          /*
              if we directly set an inline style we have our curly brace to say this an expresion and then,
               we need another curly brace to say this is style
           */
          <p style={ {marginTop: '2rem' }}> Your list is empty.</p>
        )}
    </main>
  )
}

export default Content;
