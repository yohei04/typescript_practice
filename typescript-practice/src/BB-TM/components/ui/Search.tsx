import React, { useState } from 'react';

interface SearchProps {
  
}

const Search: React.FC<SearchProps> = ({ setQuery }) => {
  const [text, setText] = useState('');

  return (
    


    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};
export default Search;
