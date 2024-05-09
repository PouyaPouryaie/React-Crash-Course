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
- you can use `localStorage` to store and fetch data from local storage of clien `localStorage.setItem('shoppinglist', JSON.stringify(listItems));`
- preventing null exception in initial state (load app at the first time), by using [] in useState <br> 
`  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);`
- if we want to load data only occure at load time, we need to use `[]`
` useEffect ( () => setItems(load data from API), [])`
- you need to have whatever you put in the JSX inside of a parent element or element container and  <br> 
you can use a fragment to do that.` return ( <> {your JSX Component} </> )`, in this syntax `<>` is a fragment
- each item in list needs a key
    `<ul> {items.map(item => ( <ListItem key={item.id} ))} </ul>`