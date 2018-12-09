import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onFormSubmit = (e) =>{
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              className="searchbar"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              type="text"
              placeholder="Search for a vehicle..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
