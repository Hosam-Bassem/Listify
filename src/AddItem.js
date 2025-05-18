import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

    const inputRef = useRef()
    return (
        <form className='addForm' onSubmit={(e) => handleSubmit(e)}>

            <label htmlFor='addItem'>Add Item</label> {/* for is reserved therefore htmlFor */}
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem} // for it to be a controlled component need value attr to state the inputs state
                onChange={(e) => setNewItem(e.target.value)} // to get the value from an input event.target.value
            />

            {/* aria-label is on of the few that has a hyphen rather than cc */}
            <button
                type='submit'
                aria-label='Add item' 
                onClick={() => inputRef.current.focus()}
            >
                <span class="material-symbols-outlined">
                    add
                </span>
            </button>

        </form>
    )
}

export default AddItem