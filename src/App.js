import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <Router>
          <p>Cozi Furniture</p>
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
