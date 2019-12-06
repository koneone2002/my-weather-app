import React, { useState } from 'react';

const Search = () => {
  const [location, setLocation] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (location === '') {
      alert('Please enter a location');
    } else {
      setLocation('');
    }
  };
  const onChange = e => setLocation(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Location...'
          value={location}
          onChange={onChange}
        />
        <input
          type='submit'
          className='btn btn-dark btn-block'
          value='Search'
        />
      </form>
    </div>
  );
};

Search.propTypes = {};

export default Search;
