import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import React from 'react'
import { useState } from 'react';

function App() {

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

  return (
    <div className="App">
      <Header title="Groceries" />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
