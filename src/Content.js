/*
    Event Listener
    1. define your function like this: const clickHandler = () => { console.log('click') };
    2. using your function by put it as reference in your jsx file and call it like this: <button onClick={clickHandler}>click</button>

    useStake Hook
    first, import useState from react
    second, wrote value and setValue -> const [name, setName] = useState("dave"); ... setName("ali");
    Note: if you use const for useState, when the function is called, the current value of state sent to the process and you can't change it,
     so if you get the value of the state,you have the old value (value before change it thourght the function), 
     the reason is we don't want to change the value directly.

*/
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave"); // default state of the name
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["pouya", "ali", "sina"];
    const randomNumber = Math.floor(Math.random() * names.length);
    setName(names[randomNumber]); // change value of the name
  };

  const clickHandler = () => {
    setCount(count + 1);
    console.log(`${count} clicked`);
  };

  const clickHandler2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const clickHandler3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={clickHandler}>Hello, {name}!</p>
      <button onClick={clickHandler}>click it</button>
      <button onClick={() => clickHandler2("John")}>click number2</button>
      <button onClick={(e) => clickHandler3(e)}>click event</button>
      <button onClick={() => handleNameChange()}>change Name</button>
    </main>
  );
};

export default Content;
