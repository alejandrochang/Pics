import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onInputChange(event){
    console.log(event.target.value);
  }

  render() {
    return <div className="ui segment">
        <form className="ui form">
          <div className="field">
          <label>Image Search</label>
              <input className="searchbar" onChange={this.onInputChange} type="text" placeholder="Search for a vehicle" />
          </div>
        </form>
      </div>;
  }
}

export default SearchBar;