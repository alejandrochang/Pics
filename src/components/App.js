import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import ImageCard from './ImageCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

   onSearchSubmit = async (input) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: input }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return(
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/><br />
        <ImageList images={this.state.images} /> <br />
      </div>
    );
  }
}

export default App;