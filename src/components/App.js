import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar /><br />
      {/* <ImageList /> <br /> */}
    </div>
  );
};


export default App;