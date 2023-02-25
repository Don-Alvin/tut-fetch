import React, { useEffect, useState } from 'react'
import Form from './Form'
import ListItems from './ListItems'

const App = () => {
  const [items, setItems] = useState([])
  const [reqType, setreqType] = useState('users')

  const API_URL = 'https://jsonplaceholder.typicode.com/'

  useEffect(() => {
    const fetchUrl = async() => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json()
        console.log(data)
        setItems(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUrl()
  }, [reqType])
  return (
    <div>
      <Form reqType={reqType} setreqType={setreqType}/>
      <ListItems items={items}/>
    </div>
  )
}

export default App