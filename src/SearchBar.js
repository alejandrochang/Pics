import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <div>
      <input className="searchbar" type="text"/>
      <br />
      Search for a vehicle
    </div>
  }
}

export default SearchBar;