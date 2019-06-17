import React, { Component } from 'react';
import { Lesson } from './lesson';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Lesson child={<Button />}><Counter /></Lesson> */}
        <Lesson />
      </div>
    );
  }
}

export default App;
