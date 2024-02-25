import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import React from 'react'
import { useState, useEffect } from 'react';
import AddItem from './AddItem.js';
import SearchItem from './SearchItem.js';

function App() {

  const API_URL = 'http://localhost:3500/items';

  // preventing null exception in initial state by using [] in useState 
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');
  
  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
      
    setTimeout(() => fetchItems(), 2000);

  }, [] );

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  // we don't want to change state directly, so it's better to use high order functions to check value and create new list of value from previous one
  const handleCheck = (id) => {
    console.log(`key: ${id}`)
    const listItems =  items.map( (item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems);
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
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{color: "red"}}>{ `Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete} 
          />}
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
