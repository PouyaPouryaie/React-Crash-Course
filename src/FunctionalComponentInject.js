import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import React from 'react'
import { useState } from 'react';
import AddItem from './AddItem.js';
import SearchItem from './SearchItem.js';

function App() {

  //use default state
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: false,
  //     item: "one half pound bag of Cocoa Covered Almonds Unsalted",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "item 2",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "item 3",
  //   },
  // ]);

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    // if we want after reload latest state still remaining for use
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  // we don't want to change state directly, so it's better to use high order functions to check value and create new list of value from previous one
  const handleCheck = (id) => {
    console.log(`key: ${id}`)
    const listItems =  items.map( (item) => item.id === id ? {...item, checked: !item.checked} : item)
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Groceries" />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItem 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
