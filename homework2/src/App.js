import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a class="navbar-brand" href="#">Logo</a>
                  ...
              </nav> 
      </header>
      <div className="container-fluid">
      <h3>Brand / Logo</h3>
      <p>The .navbar-brand class is used to highlight the brand/logo/project name of your page.</p>
      <form id="add" className="form-inline">
      <label for="receipts">Receipts : </label>
      <input type="number"  class="form-control" id="receipts" placeholder="Enter receipts" name="receipts"></input>
      </form>
      <div>
        รายได้ทั้งหมด : <div name="sum"></div>
      </div>
    </div>
    </div>
  );
}

export default App;
