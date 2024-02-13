/* 
    Using inline css
    1. <header style={{backgroundColor: 'blue', color: '#fff'}}> ... </header>
    2. const headerStyle={backgroundColor: 'blue', color: '#fff'}; ... <header style={headerStyle}> ... </header>
    

    JS note
    Destructuring assingment:The destructuring assignment syntax is a JavaScript expression that makes it possible 
    to unpack values from arrays, or properties from objects, into distinct variables.
    const obj = { a: 1, b: 2 };
    const { a, b } = obj;
    // is equivalent to:
    // const a = obj.a;
    // const b = obj.b;

    in this code: if you use property in the main.js file like 'title', you can use destructuring assingment in the child js file,
    main.js -> <Header title="Groceries" /> #### child.js ->  ({ title }) => return ( <h1> {title} </h1>)



*/ 

import React from 'react'

const Header = ({ title }) => {
  return (
    <header >
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header