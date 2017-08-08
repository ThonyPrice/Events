import React from "react";
import BackgroundImage from "./BackgroundImage";
import Navbar from "./Navbar";
import Content from "./Content";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="group-bg"
      style={{
        position: 'relative'
      }}>
        <BackgroundImage />
        <div style={{
          position: 'absolute',
          top: '0',
          width: '100%'
        }}>
          <Navbar />
        </div>
      </div>
    );
  }
}
