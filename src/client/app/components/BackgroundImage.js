import React from "react";

export default class BackgroundImage extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-12">
          <img className="mx-auto d-block" src="app/img/gb-background.png"
          style={{
            maxHeight: '400px'
          }}/>
        </div>
      </div>
    );
  }
}
