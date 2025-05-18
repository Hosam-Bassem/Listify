const LineItem = ({ item, handleCheck, handleDelete }) => {

    return (
        <li className='item' key={item.id}> {/* Each li in react needs a key attribute */}

            <input type='checkbox' checked={item.checked} onChange={() => handleCheck(item.id)}/>
            <label 
            onDoubleClick={() => handleCheck(item.id)}
            style={(item.checked) ? {textDecoration: 'line-through'}:null}
            >{item.item}</label>
            <button>
                <span class="material-symbols-outlined" style={{cursor: 'pointer'}} role='button' onClick={()=>handleDelete(item.id)}>
                    delete
                </span>             
            </button>

        </li>
    )
}

export default LineItem