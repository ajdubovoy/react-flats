import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flat_list';
import GMap from './g_map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats: flats
    };
  }

  handleUpdate(event) {
    const index = event.target.index;
    this.setState(
      { selectedFlat: flats.index }
    );
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          handleUpdate={this.handleUpdate}
          selectedFlat={this.state.selectedFlat}
        />
        <GMap
          selectedFlat={this.state.selectedFlat}
        />
      </div>
    );
  }
}

export default App;
