/* 
    Using inline css
    1. <header style={{backgroundColor: 'blue', color: '#fff'}}> ... </header>
    2. const headerStyle={backgroundColor: 'blue', color: '#fff'}; ... <header style={headerStyle}> ... </header>
    
*/ 

import React from 'react'

const Header = () => {
  return (
    <header >
        <h1>Groceries List</h1>
    </header>
  )
}

export default Header