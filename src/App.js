import Header from './Header'; 
import Content from './Content';  
import Footer from './Footer';
import { useState, useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {

  const API_URL = 'http://localhost:3500/items'

  const [items, setItems] = useState([]) // Initial state
  const [search, setSearch] = useState('')
  const [newItem, setNewItem] = useState('')
  const [fetchError, setFetchError] = useState(null) // maintaining the state of the fetchError

  // initially to true since data is loading during the start of the app
  const [isLoading, setisLoading] = useState(true) 

  // on every Page Load
  useEffect(() => {

    const fetchItems = async () => {
        try {
          const response = await fetch(API_URL)
          if(!response.ok) throw new Error('Could not fetch data')
          const listItems = await response.json()
          setFetchError(null) // setting no error state
          setItems(listItems)
        } catch(err) {
          setFetchError(err.message) // setting the state to error
        } finally {
          setisLoading(false) // after the try block loading data is done
        }
    }
    fetchItems()
  }, [])

  const handleCheck = async (id) => {

    const listItems = items.map((item) => {
        if(item.id === id) {
          // {...obj} to copy an obj and {...obj, property: 'value'} change one of its value
            return { ...item, checked: !item.checked }; 
        } else {
            // Return the unchanged item if ids don't match
            return item;
        }
    });
    
    // Update the state with the modified items array
    setItems(listItems)

    const myItem = listItems.filter((item) => item.id === id)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked}) // updating the checked property since the.filter returns an arr used [0]
    }

    const reqUrl = `${API_URL}/${id}` // passing the url with the /id to update that id's checked property
    const result = await apiRequest(reqUrl, updateOptions)
    if(result) setFetchError(result)
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => {
        return item.id !== id
    })
    setItems(listItems)

    const deleteOptions = {method: 'DELETE'}
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if(result) setFetchError(result)
  }

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id: id,
      checked: false,
      item: item
    }
    const newItems = [...items, myNewItem]
    setItems(newItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem) // not sending the entire list, rather the new list only
    }
    const result = await apiRequest(API_URL, postOptions)
    if(result) setFetchError(result) // since the apiRequest returns an error or null
  }

  const handleSubmit = (e) => {
    e.preventDefault() // preventing page reload
    addItem(newItem)
    setNewItem('') // clearing the input text
  }

  return (
    <div className="App">
      <Header title='To-Do'/>

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      <main>

        {/* If fetchError present then do.. */}
        {fetchError && <p style={{ color: 'red'}}>{`Error: ${fetchError}`}</p>}

        {isLoading && <p>Loading items...</p>}

        {/* If no fetch error, diplay content */}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />}

      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
