## useEffect

Running specific function or action by checking state of specifc dependency <br>

Sample: <br>
    dependency: item <br>
    function: part one of sample <br>

```JavaScript
useEffect(() => {console.log('update items')}, [items])
```

- you can use useEffect when you want call the API and inizialize data at your parameter with result of API

~~~JavaScript
const [items, setItems] = useState([]);
useEffect ( () => setItems(load data from API), [items]) 
~~~

## Note
- afte each changes at UI, you get render event
- preventing null exception in initial state (load app at the first time), by using [] in useState <br> 
`  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);`