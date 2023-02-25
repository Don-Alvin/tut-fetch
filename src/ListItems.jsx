import React from 'react'
import List from './List'

const ListItems = ({items}) => {

  return (
        <ul>
           
  {items.map(item => (
    <List
        key={item.id}
        item={item}
    />
))}
        </ul>
  )
}

export default ListItems