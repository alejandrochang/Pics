import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './ImageList';
import SearchBar from './SearchBar';


const App = () => {
  return (
    <div>
      Hello World <br />
      <SearchBar /><br />
      <ImageList /> <br />

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
