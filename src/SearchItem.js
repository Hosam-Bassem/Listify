const SearchItem = ({ search, setSearch }) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label> {/* for is reserved therefore htmlFor */}
            <input
                type='text'
                role='searchbox'
                id='search'
                placeholder='Search items'
                value={search} // for it to be a controlled component need value attr to state the inputs state
                onChange={(e) => setSearch(e.target.value)}  // to get the value from an input event.target.value
            />
        </form>
    )
}

export default SearchItem