import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div
      style={
        {margin: '0'},
        {padding: '0'}
      }>
        <div className="container header-section"
        style={
          {margin: '0'},
          {padding: '0'},
          {position: 'relative'}
        }>
          <div className="background-image"
          style={
            {margin: '0'},
            {padding: '0'},
            {position: 'relative'}
          }>
            <img
              src="app/img/gb-background.png"
              className="img-responsive"
              id="top-bg-picture"
              alt="Background"
            ></img>

            <div className="col-3 logo"
            style={
              {background: 'green'},
              {padding: '0'},
              {position: 'absolute'}
            }>
              <img
                src="app/img/globuzzer-big-logo.png"
                className="img-responsive text-left"
                id="top-bg-logo"
                alt="Logo"
              ></img>
            </div>

          </div>

          <AwesomeComponent />
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
