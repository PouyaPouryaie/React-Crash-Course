/*
    Event Listener

*/
import React from 'react'
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "one half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "item 2",
    },
    {
      id: 3,
      checked: false,
      item: "item 3",
    },
  ]);

  // we don't want to change state directly, so it's better to use high order functions to check value and create new list of value from previous one
  const handleCheck = (id) => {
    console.log(`key: ${id}`)
    const listItems =  items.map( (item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems);
    
    // if we want after reload latest state still reaminng for use
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  /* 
  1. in order to show the list value, we can use map function in JSX.
  2. each list item in react needs key. so we need to add key as attribute for list of items
      react needs keys, it helps react to which item is changed, which item is deleted, because react responses to change state
  3. we can use anonymouse function to call another function and send value to function eg:onChange={() => handleCheck(item.id)}
*/

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input type="checkbox" onChange={ () => handleCheck(item.id)} checked={item.checked} />
              <label style={(item.checked) ? {textDecoration: 'line-through'} : null } onDoubleClick={ () => handleCheck(item.id)}>{item.item}</label>
              <FaTrashAlt onClick={ () => handleDelete(item.id)} role="button" tabIndex="0" />
            </li>
          ))}
        </ul>
        ) : (
          /*
              if we directly set an inline style we have our curly brace to say this an expresion and then,
               we need another curly brace to say this is style
           */
          <p style={ {marginTop: '2rem' }}> Your list is empty.</p>
        )}
    </main>
  );
};

export default Content;
