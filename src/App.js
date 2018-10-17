import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
          <form className="form-inline">
              <div className="form-group mb-2">
                  <label htmlFor="staticEmail2" className="sr-only">I'm looking for!</label>
                  <input type="text" readOnly className="form-control-plaintext" id=""
                         value="I'm looking for!" />
              </div>
              <div className="form-group mx-sm-3 mb-2">
                  <label htmlFor="inputPassword2" className="sr-only">Text of my search request</label>
                  <input type="text" className="form-control" id="" placeholder="Text of my search request" />
              </div>
              <button type="submit" className="btn btn-primary mb-2">Add search string</button>
          </form>
      </div>
    );
  }
}

export default App;
