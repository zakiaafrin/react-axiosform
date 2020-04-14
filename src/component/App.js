import React, { Component } from 'react';
import AxiosFormApp from './AxiosFormApp';

class App extends Component {
  render() {
    return (
      <div className="container py-3" >
        <h1>Post Form Data Using Axios</h1>
        <AxiosFormApp />
      </div >
    );
  }
}

export default App;