import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <p>Cozi Furniture</p>
        <Router></Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
