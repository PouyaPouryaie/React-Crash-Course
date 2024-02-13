import React from 'react'
import LineItem from './LineItem'

/* 
    Note: Each child in a list should have a unique "key" prop.
    because of that we added below line: 
                key={item.id}
*/

const ItemList = ( {items, handleCheck, handleDelete} ) => {
  return (
    <ul>
        {items.map((item) => (
            <LineItem
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleCheck}
            />
        ))}
    </ul>
  )
}

export default ItemList